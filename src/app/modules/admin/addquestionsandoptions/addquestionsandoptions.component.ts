import { QuestionDto } from './../../../core/enums/QuestionDto';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizDetailsViewModel } from '../../../core/enums/QuizDetailsViewModel';
import { QuizService } from '../../../shared/services/Quiz/quiz.service';
import { DashboardService } from '../../../shared/services/Dashboard/dashboard.service';
import { IQuiz } from '../../../core/enums/Quiz';
import { CreateQuiz } from '../../../core/enums/CreateQuiz';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addquestionsandoptions',
  templateUrl: './addquestionsandoptions.component.html',
  styleUrl: './addquestionsandoptions.component.css'
})
export class AddquestionsandoptionsComponent {
  quizzes: QuizDetailsViewModel[] = [];
  selectedQuizId: number | null = null; // To hold the selected quiz ID
  selectedQuiz: QuizDetailsViewModel | undefined;
  Questions: QuestionDto[] = []
  currentQustionId = 0;
  constructor(private dashboardservice: DashboardService, private touster:ToastrService) { }

  ngOnInit(): void {
    this.loadQuizzes();
  }

  loadQuizzes(): void {
    this.dashboardservice.getAllQuizzes().subscribe((data) => {
      this.quizzes = data;
    });
  }

  onQuizSelected(): void {
    console.log(this.selectedQuizId);

    this.dashboardservice.getQuizByID(this.selectedQuizId).subscribe({
      next: (res) => {
        this.selectedQuiz = res
        for (let index = 0; index < this.selectedQuiz.NumberOfQuestions; index++) {
          this.Questions.push({ QuestionId: index, Text: "", Options: [] })

        }
      },
      error: (err) => {

      }
    })
  }
  AddOption() {
    this.Questions[this.currentQustionId].Options.push({
      OptionText: "",
      IsCorrect: false,
      OptionId: this.Questions[this.currentQustionId].Options.length,
      IsSelected: false
    })
  }
  changeQustionOption(event: any, optionId: number) {
    this.Questions[this.currentQustionId].Options[optionId].OptionText = event.target.value;
  }
  selectQustionOption(event: any, optionId: number) {
    if (event.target.checked == true) {
      this.Questions[this.currentQustionId].Options.forEach(op => op.IsCorrect = false)
      this.Questions[this.currentQustionId].Options[optionId].IsCorrect = true;
      console.log(this.Questions);
    }
  }
  changeCurrent(newid: number) {
    this.currentQustionId = newid;
  }
  changeQustionHead(event: any) {
    this.Questions[this.currentQustionId].Text = event.target.value;
    console.log(this.Questions);
  }

  removeOption(optionid: number) {
    this.Questions[this.currentQustionId].Options.splice(optionid, 1)
    // let temp = this.Questions[this.currentQustionId].Options;
    // this.Questions[this.currentQustionId].Options= []
    // for (let index = 0; index < temp.length; index++) {
    //   this.Questions[this.currentQustionId].Options.push({

    //   })
    // }
  }
  Save() {
    this.dashboardservice.addQuestionsToQuiz(this.currentQustionId, this.Questions).subscribe({
      next: (res) => {
        console.log(res);
        this.touster.success("Questions Added Successfully");
        
      },
      error: (err) => {
        console.log(err);
        this.touster.error("Failed to Add Questions")
      }
    })
  }
}
