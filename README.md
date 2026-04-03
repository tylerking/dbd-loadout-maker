# DBD Loadout Maker - Modernized

This project is a fully modernized version of the original DBD Loadout Maker, ported from a 7-year-old Vue 2 project to the latest **Nuxt 3** with **Composition API**, **TypeScript**, and **Vanilla Extract** for styling.

## Key Updates & Features

- **Nuxt 3 & Composition API**: Rebuilt from the ground up using the latest Vue.js framework and patterns.
- **TypeScript**: Full type safety across the entire application, including the perk data and components.
- **GraphQL Perk API**: A custom GraphQL endpoint built with `graphql-yoga` and Nitro, serving robust perk data.
- **Vanilla Extract Styling**: Modern, type-safe CSS-in-JS styling with a tokens-based theme system.
- **Improved Data Model**: Perks now have robust categorization (Aura, Haste, Gen Speed, etc.) and better metadata.
- **Unit & E2E Testing**: Integrated **Playwright** for comprehensive end-to-end testing of features like randomization and locking.
- **Clean Architecture**: Organized under a `lib` folder for better maintainability and separation of concerns.

## Tech Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **Styling**: Vanilla Extract CSS
- **API**: GraphQL (via GraphQL Yoga in Nitro)
- **Testing**: Playwright
- **Package Manager**: pnpm

## Project Setup

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

### Production

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Testing

```bash
# Run e2e tests
pnpm test:e2e
```

## Original Project Comparison

This project was ported from a legacy Vue 2 project. Key changes include:
- Migrated from Options API to **Composition API**.
- Switched from Stylus to **Vanilla Extract** for type-safe styles.
- Replaced Vuex with Nuxt's built-in state management and GraphQL for data fetching.
- Added comprehensive TypeScript support.
- Modernized the build pipeline from Vue CLI to Nuxt/Vite.
