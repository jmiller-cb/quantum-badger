# quantum-badger

## Overview

This is a timed coding exercise — aim to spend about 30 minutes. The goal is to demonstrate thought process; completing every requirement is less important than writing clean, readable code. You will build a test-taking UI in the `ui/` directory against a pre-scaffolded local Express API.

## Prerequisites

- Node.js 18+

## Getting Started

You will need two terminals running simultaneously.

**Terminal 1 — API:**
```bash
cd api
npm install
npm run dev
```

API runs at http://localhost:3001

**Terminal 2 — UI:**
```bash
cd ui
npm install
npm run dev
```

UI runs at http://localhost:5173

## The Challenge

Build a test-taking experience in `ui/src/`. The app shell and TypeScript interfaces are already provided in `ui/src/App.tsx` and `ui/src/types/index.ts`.

### Requirements

1. **Fetch and display questions** — on load, fetch the question list from `GET /api/questions`
2. **One question at a time** — display questions in a stepper/wizard: show one question, its answer choices, and Prev/Next navigation
3. **Progress indicator** — show the candidate's position (e.g. "Question 3 of 12")
4. **Answer selection** — allow selecting one answer per question; navigating away and back should preserve the selection
5. **Submission guard** — the Submit button should be disabled (or hidden) until every question has a selected answer
6. **Submit and score** — on Submit, POST the answers to `/api/submit` and display the returned score (e.g. "You scored 8 out of 12")

## API Reference

### `GET /api/questions`

Returns the list of exam questions. Note: correct answers are not included in the response.

**Response:**
```json
[
  {
    "id": "q1",
    "stem": "Which of the following expressions is equivalent to 3(x + 4) − 2x?",
    "answers": [
      { "id": "a", "text": "x + 4" },
      { "id": "b", "text": "x + 12" },
      { "id": "c", "text": "5x + 4" },
      { "id": "d", "text": "5x + 12" }
    ],
    "subject": "Math",
    "difficulty": "easy",
    "tags": ["algebra", "expressions"]
  }
]
```

### `POST /api/submit`

Scores the exam. Send all answers; the server returns a score.

**Request body:**
```json
{
  "answers": [
    { "questionId": "q1", "answerId": "b" },
    { "questionId": "q2", "answerId": "c" }
  ]
}
```

**Response:**
```json
{
  "score": 8,
  "total": 12
}
```

## What's Provided

| Path | Description |
|------|-------------|
| `api/` | Fully scaffolded Express API — do not modify |
| `ui/src/types/index.ts` | TypeScript interfaces for all API shapes |
| `ui/src/App.tsx` | Minimal app shell — build your UI here |
| `ui/src/App.css` | Tailwind CSS entry point — utility classes available globally |

## Notes

- TypeScript strict mode is enabled
- You may install additional packages freely (component libraries, fetching utilities, etc.)
- Focus on clarity and thought process over pixel-perfect UI
- If you run out of time, a partial implementation with a short note on what you'd do next is perfectly valid
