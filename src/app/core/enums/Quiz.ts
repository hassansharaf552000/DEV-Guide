import { AnswerViewModel } from "./AnswerViewModel"
import { IQuestion } from "./Question"

export interface IQuiz{
  QuizId:number
  QuizName:number
  NumberOfQuestions:number
  Duration:number
  SkillId?:number
  Questions: IQuestion[];
  // Answers:AnswerViewModel[];

}
