export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  stem: string;
  answers: Answer[];
  subject: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

export interface SubmitRequest {
  answers: { questionId: string; answerId: string }[];
}

export interface SubmitResponse {
  score: number;
  total: number;
}
