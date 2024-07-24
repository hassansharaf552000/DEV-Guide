import { Component } from '@angular/core';

@Component({
  selector: 'app-userlayout',
  templateUrl: './userlayout.component.html',
  styleUrl: './userlayout.component.css'
})
export class UserlayoutComponent {
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

