# quantum-badger — Project Brief

## Challenge Overview

**Type:** Senior Software Engineer coding exercise
**Time limit:** 30 minutes (challenge is scoped to allow early completion)
**Goal:** Demonstrate thought process, component design, and React/TypeScript fluency — not necessarily full completion

---

## Challenge: Test-Taking UI

The candidate is given a fully scaffolded local Express API and asked to build a test-taking experience in React + TypeScript.

### What is pre-built (given to candidate)
- Express API running locally with two endpoints (see below)
- Mock dataset of 10–15 exam questions (constant JSON)
- React + TypeScript app shell (Vite, routing, basic layout)
- TypeScript interfaces for all API request/response shapes

### What the candidate builds
- Full test-taking UI consuming the provided API

---

## API Endpoints

**Base URL:** `http://localhost:3001`

### `GET /api/questions`
Returns the list of exam questions.

**Response:**
```json
[
  {
    "id": "q1",
    "stem": "Which of the following best describes...",
    "answers": [
      { "id": "a", "text": "Answer A" },
      { "id": "b", "text": "Answer B" },
      { "id": "c", "text": "Answer C" },
      { "id": "d", "text": "Answer D" }
    ],
    "subject": "Math",
    "difficulty": "medium",
    "tags": ["algebra", "linear-equations"]
  }
]
```

### `POST /api/submit`
Accepts the candidate's answers and returns a score.

**Request body:**
```json
{
  "answers": [
    { "questionId": "q1", "answerId": "b" }
  ]
}
```

**Response:**
```json
{
  "score": 7,
  "total": 10
}
```

---

## Dataset

10–15 questions with mixed metadata:
- **Subjects:** Math, Reading, Science
- **Difficulty:** easy, medium, hard
- **Tags:** 2–3 per question (e.g. "algebra", "inference", "biology")

---

## Required UI Behaviors

The candidate's React app must implement:

1. **One question at a time** — wizard/stepper navigation (Previous / Next)
2. **Progress indicator** — shows current position (e.g. "Question 3 of 12")
3. **Block submission until all questions are answered** — Submit is disabled/hidden until every question has a selected answer
4. **Results screen** — after submission, display the returned score (e.g. "You scored 7 out of 10")

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite |
| API | Node.js, Express, TypeScript |
| Intended deployment target | AWS (CDK — Lambda + API Gateway) |

> Note: CDK/serverless is the intended production architecture but is not part of this exercise. The local Express server mirrors what a Lambda handler would expose.

---

## Repo Structure (once scaffolded)

```
quantum-badger/
├── api/                  # Pre-scaffolded Express server (candidate does not modify)
│   ├── src/
│   │   ├── index.ts
│   │   ├── routes/
│   │   └── data/questions.json
│   ├── package.json
│   └── tsconfig.json
├── ui/                   # React app — candidate implements the UI here
│   ├── src/
│   │   ├── App.tsx
│   │   ├── types/        # Shared TypeScript interfaces (pre-provided)
│   │   └── components/   # Candidate builds components here
│   ├── package.json
│   └── tsconfig.json
└── README.md             # Candidate-facing setup and challenge instructions
```
