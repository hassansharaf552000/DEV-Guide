export interface CreateQuiz {
  QuizId: number;
  QuizName: string;
  NumberOfQuestions: number;
  Duration: number;
  SkillId: number;
  SkillName?: string;
}
