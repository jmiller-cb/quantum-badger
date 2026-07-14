import { Router, Request, Response } from 'express';
import questions from '../data/questions.json';

const router: Router = Router();

interface SubmittedAnswer {
  questionId: string;
  answerId: string;
}

interface SubmitBody {
  answers: SubmittedAnswer[];
}

interface SubmitResult {
  score: number;
  total: number;
}

const correctAnswerMap: Record<string, string> = Object.fromEntries(
  questions.map((q) => [q.id, q.correctAnswerId])
);

router.post('/', (req: Request<object, SubmitResult, SubmitBody>, res: Response<SubmitResult>) => {
  const submitted: SubmittedAnswer[] = req.body?.answers ?? [];

  let score = 0;
  for (const { questionId, answerId } of submitted) {
    const correct = correctAnswerMap[questionId];
    if (correct !== undefined && correct === answerId) {
      score += 1;
    }
  }

  res.json({ score, total: submitted.length });
});

export default router;
