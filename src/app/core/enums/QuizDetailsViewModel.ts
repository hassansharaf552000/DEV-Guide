import { QuestionDto } from "./QuestionDto";

export interface QuizDetailsViewModel {
  QuizId: number;
  QuizName: string;
  NumberOfQuestions: number;
  Duration: number;
  SkillId: number;
  SkillName?: string;
  Questions: QuestionDto[];
}
