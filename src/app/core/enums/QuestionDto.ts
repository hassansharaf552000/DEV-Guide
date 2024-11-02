import { OptionDto } from "./OptionDto";

export interface QuestionDto {
  QuestionId: number;
  Text: string;
  Options: OptionDto[];
}
