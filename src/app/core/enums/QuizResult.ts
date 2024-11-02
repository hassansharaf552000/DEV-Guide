import { QuestionDto } from './QuestionDto';
export interface IQuizResult {
  QuizId: number;
  QuizName: string;
  Score: number;
  Passed: boolean;
  Questions: QuestionDto[];
}
