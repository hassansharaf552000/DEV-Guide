import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Developers:Array<any>
  clientsfeedbacks:Array<any>
  constructor() {
    this.clientsfeedbacks=[
      {
        id: 1,
        imgURL:"01.jpg",
        name: "John Doe",
        rate:4,
        comment: "This is a great product"
      },
      {
        id: 2,
        imgURL:"10.jpg",
        name: "Adham Hamdy",
        rate:3,
        comment: "This is a great product"
      },
      {
        id: 3,
        imgURL:"05 (1).jpg",
        name: "Dina John",
        rate:4,
        comment: "This is a great product"
      },
      {
        id: 4,
        imgURL:"04.jpg",
        name: "Hassan Sharaf",
        rate:5,
        comment: "This is a great product"
      },
      {
        id: 5,
        imgURL:"06.jpg",
        name: "Mirna Alfy",
        rate:4,
        comment: "This is a great product"
      },

    ]
    // this.Developers = [
    //   {
    //     id: 1,
    //     name: "Hassan Sharaf",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: ""

    //   },
    //   {
    //     id: 1,
    //     name: "Adham Hamdy",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: ""
    //   },
    //   {
    //     id: 1,
    //     name: "Ahmed Momen",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: ""
    //   },
    //   {
    //     id: 1,
    //     name: "Mohamed AbdelHakem ",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: ""
    //   },
    //   {
    //     id: 1,
    //     name: "Dina John",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: ""
    //   },
    //   {
    //     id: 1,
    //     name: "Mirna Alfy",
    //     job: "Full Stack .Net ",
    //     rate:0,
    //     imgURL: "01.jpg"

    //   },
    // ]

   }




}

