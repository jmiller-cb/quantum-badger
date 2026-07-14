import { Router, Request, Response } from 'express';
import questions from '../data/questions.json';

const router: Router = Router();

interface Answer {
  id: string;
  text: string;
}

interface QuestionPublic {
  id: string;
  stem: string;
  answers: Answer[];
  subject: string;
  difficulty: string;
  tags: string[];
}

function parseNonNegativeInt(value: unknown): number | undefined {
  if (typeof value !== 'string') return undefined;
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) || parsed < 0 ? undefined : parsed;
}

router.get('/', (req: Request, res: Response) => {
  const stripped: QuestionPublic[] = questions.map(({ correctAnswerId: _omit, ...rest }) => rest);

  const offset = parseNonNegativeInt(req.query.offset) ?? 0;
  const limit = parseNonNegativeInt(req.query.limit) ?? stripped.length;

  res.json(stripped.slice(offset, offset + limit));
});

export default router;
