import { createSchema, createYoga } from 'graphql-yoga';
import { killerPerks, survivorPerks } from '../../lib/data/perks';

const allPerks = [...killerPerks, ...survivorPerks];

const typeDefs = `
  enum PerkSide {
    Killer
    Survivor
  }

  type Perk {
    id: ID!
    name: String!
    description: String!
    character: String!
    categories: [String!]!
    side: String!
    imageUrl: String!
  }

  type Query {
    perks(
      side: PerkSide, 
      categories: [String!], 
      search: String
    ): [Perk!]!
    perk(id: ID!): Perk
    categories(side: PerkSide): [String!]!
  }
`;

const resolvers = {
  Query: {
    perks: (_: any, { side, categories, search }: { side?: string; categories?: string[]; search?: string }) => {
      let filtered = [...allPerks];
      
      if (side) {
        filtered = filtered.filter(p => p.side === side);
      }
      
      if (categories && categories.length > 0) {
        filtered = filtered.filter(p => 
          categories.every(cat => p.categories.includes(cat as any))
        );
      }
      
      if (search) {
        const s = search.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(s) || 
          p.character.toLowerCase().includes(s) ||
          p.description.toLowerCase().includes(s)
        );
      }
      
      return filtered;
    },
    perk: (_: any, { id }: { id: string }) => allPerks.find(p => p.id === id),
    categories: (_: any, { side }: { side?: string }) => {
      const perks = side ? allPerks.filter(p => p.side === side) : allPerks;
      const cats = new Set<string>();
      perks.forEach(p => p.categories.forEach(c => cats.add(c)));
      return Array.from(cats).sort();
    }
  }
};

const schema = createSchema({
  typeDefs,
  resolvers,
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = getRequestURL(event);
  
  const response = await yoga.fetch(
    new Request(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body)
    }),
    { event }
  );
  return response.json();
});