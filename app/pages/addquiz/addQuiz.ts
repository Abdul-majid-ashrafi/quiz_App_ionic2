import {Page  , NavController, NavParams} from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
  import {Observable} from 'rxjs/Observable';
import {HomePage} from '../home/home'

@Page({
  templateUrl: 'build/pages/addQuiz/addQuiz.html'
})
export class QuizPage {
  
  obj :any={}
    index: number = 0

 quiz
 quizOption
    constructor(public af: AngularFire , public nav : NavController) {
      
          this.quiz = this.af.database.list('quizz/')
      //   this.quiz.subscribe((val) => {
      //       console.log("valaaaaaaaaa",val);
      //  })
     }
     


next(){
   this.nav.push(HomePage)
//   this.index++
//    this.quiz.subscribe((val) => {
//             console.log("valaaaaaaaaa",val[this.index]);
//        })
}

     
     
      login (obj){
      console.log(obj);
      var a =  this.quiz.push({
        ans : obj.ans,
        quiz: obj.quiz,
        options:  [ obj.optio1,
                    obj.optio2,       
                   obj.optio3,
                   obj.optio4
                   ]
                   
      })
      // console.log(a.key());
      
      // this.nav.push(HomePage)
    }
}

     
     
     
     
     
     
     
     
     
  
//     login (obj){
//       console.log(obj);
//       var a =  this.quiz.push({
//         ans : obj.ans,
//         quiz: obj.quiz,
//         options:  [{
//           option1: obj.optio1, 
//           option2: obj.optio2 ,
//           option3: obj.optio3 ,
//           option4: obj.optio4 ,
//         }]
//       })
//       // console.log(a.key());
      
//       // this.nav.push(HomePage)
//     }
// }
