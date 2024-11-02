import { IOption } from "./Options";

export interface IQuestion {
  QuestionId: number;
  Text: string;
  Options: IOption[];
  SelectedOption?: number; // Add this line to store the selected option
}
