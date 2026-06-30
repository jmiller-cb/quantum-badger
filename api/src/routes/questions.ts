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

router.get('/', (_req: Request, res: Response) => {
  const stripped: QuestionPublic[] = questions.map(({ correctAnswerId: _omit, ...rest }) => rest);
  res.json(stripped);
});

export default router;
