import { Injectable } from '@angular/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QuizService {
    quizArray: any[] = []
    quiz: Observable<any[]>;

    constructor(public af: AngularFire) { }

    getdat(callback:any) {
        this.quiz = this.af.database.list('quizz/')
        this.quiz.subscribe((val) => {
            // console.log("val",val);
            val.forEach((childVal) => {
                this.quizArray.push(childVal)                
            })
            console.log("SerVice: ", this.quizArray);
            callback();
        })
    }


   
}