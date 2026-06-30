# CLAUDE.md

## Project

`quantum-badger` is a senior engineer coding exercise. The candidate builds a test-taking UI in React + TypeScript against a pre-scaffolded local Express API.

See `PROJECT.md` for full challenge details, API contracts, dataset shape, and evaluation criteria.

## Repo Layout

```
api/       Express server — pre-scaffolded, candidate does not modify
ui/        React + Vite app — candidate implements UI here
README.md  Candidate-facing setup and challenge instructions
```

## Running Locally

```bash
# API (port 3001)
cd api && npm install && npm run dev

# UI (port 5173)
cd ui && npm install && npm run dev
```

## API

- `GET  http://localhost:3001/api/questions` — returns question list
- `POST http://localhost:3001/api/submit`    — accepts answers, returns `{ score, total }`

Full request/response shapes are in `api/src/data/questions.json` and `ui/src/types/`.

## Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript
## Conventions

- TypeScript strict mode enabled in both packages
- Tailwind CSS v4 is pre-configured in `ui/`
- `ui/src/types/` contains shared TypeScript interfaces
- API data is static (constant JSON); no database
