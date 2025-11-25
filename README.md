# React + TypeScript + Vite

This project uses Vite with React and TypeScript along with [Biome](https://biomejs.dev/) to handle both linting and formatting. Biome runs on every save in VS Code (see `.vscode/settings.json`) so you don't need ESLint or Prettier in this repo.

## Available scripts

- `pnpm dev` – start the Vite dev server
- `pnpm build` – type-check and produce a production build
- `pnpm preview` – preview the production build locally
- `pnpm format` – run `biome format --write .`
- `pnpm lint` – run `biome check .`
- `pnpm test` – run tests

## Biome configuration

Biome settings live in `biome.json`. Adjust formatter or linter rules there if you need to customize styling or enable/disable specific diagnostics.
