import express, { Express } from 'express';
import cors from 'cors';
import questionsRouter from './routes/questions';
import submitRouter from './routes/submit';

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/api/questions', questionsRouter);
app.use('/api/submit', submitRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
