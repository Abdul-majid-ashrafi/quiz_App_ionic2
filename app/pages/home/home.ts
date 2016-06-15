import {Page, NavController} from 'ionic-angular';
import {OnInit} from '@angular/core';

import {QuizService} from "./service"
import {ResultPage} from "../result/result"
@Page({
  templateUrl: 'build/pages/home/home.html',
  providers: [QuizService]
})

export class HomePage {
  getQuiz;
  data;
  total_Length;
  index: number = 0
  mark : number = 0;
  constructor(srvce: QuizService, public nav: NavController) {

      console.log(
      srvce.getdat(()=> {
      this.getQuiz = srvce.quizArray
      this.total_Length = this.getQuiz.length
      this.data = this.getQuiz[this.index]; 
    })
    )}


  next(ab) {
           console.log("AB :",ab);
           console.log("DATA :",this.data.ans);
           
      if(ab == this.data.ans){
        this.mark += 10;
      }
     this.index++
    if (this.index == this.total_Length) {
      this.nav.push(ResultPage, this.mark)
    }
    else {
      console.log(this.getQuiz[this.index]) 
      this.data = this.getQuiz[this.index]
    }
  }

}
