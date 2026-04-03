import { createSchema, createYoga } from 'graphql-yoga';
import { killerPerks, survivorPerks, allPerks } from '../../lib/data/perks';

const typeDefs = `
  enum PerkSide {
    Killer
    Survivor
  }

  enum PerkRarity {
    Common
    Uncommon
    Rare
    VeryRare
    UltraRare
  }

  type Perk {
    id: ID!
    name: String!
    description: String!
    character: String!
    rarity: String!
    categories: [String!]!
    side: String!
    imageUrl: String!
  }

  type Query {
    perks(
      side: PerkSide, 
      categories: [String!], 
      search: String,
      rarities: [String!]
    ): [Perk!]!
    perk(id: ID!): Perk
    categories(side: PerkSide): [String!]!
  }
`;

const resolvers = {
  Query: {
    perks: (_: any, { side, categories, search, rarities }: { side?: string; categories?: string[]; search?: string; rarities?: string[] }) => {
      let filtered = [...allPerks];
      
      if (side) {
        filtered = filtered.filter(p => p.side === side);
      }
      
      if (categories && categories.length > 0) {
        filtered = filtered.filter(p => 
          categories.every(cat => p.categories.includes(cat as any))
        );
      }

      if (rarities && rarities.length > 0) {
        filtered = filtered.filter(p => rarities.includes(p.rarity));
      }
      
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(s) || 
          p.description.toLowerCase().includes(s) ||
          p.character.toLowerCase().includes(s)
        );
      }
      
      return filtered;
    },
    perk: (_: any, { id }: { id: string }) => {
      return allPerks.find(p => p.id === id);
    },
    categories: (_: any, { side }: { side?: string }) => {
      const perks = side ? (side === 'Killer' ? killerPerks : survivorPerks) : allPerks;
      const cats = new Set<string>();
      perks.forEach(p => p.categories.forEach(c => cats.add(c)));
      return Array.from(cats).sort();
    }
  }
};

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});

export default defineEventHandler(async (event) => {
  const { req, res } = event.node;
  const response = await yoga.handleNodeRequest(req, res);
  
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  
  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  return response.body;
});
