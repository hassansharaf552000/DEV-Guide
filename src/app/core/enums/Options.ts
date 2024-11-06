export interface IOption {
  OptionId: number;
  OptionText: string;
  IsCorrect: boolean;
  IsSelected: boolean; // Add this to track if an option is selected
}
