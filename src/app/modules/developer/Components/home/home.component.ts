import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  Developers:Array<any>
  constructor() {
    this.Developers = [
      {
        id: 1,
        name: "Hassan Sharaf",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: ""
        
      },
      {
        id: 1,
        name: "Adham Hamdy",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: ""
      },
      {
        id: 1,
        name: "Ahmed Momen",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: ""
      },
      {
        id: 1,
        name: "Mohamed AbdelHakem ",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: ""
      },
      {
        id: 1,
        name: "Dina John",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: ""
      },
      {
        id: 1,
        name: "Mirna Alfy",
        job: "Full Stack .Net ",
        rate:0, 
        imgURL: "01.jpg"
       
      },
    ]
  
   }

}

