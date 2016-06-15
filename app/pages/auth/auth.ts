import {Page  , NavController, NavParams} from 'ionic-angular';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders,firebaseAuthConfig} from 'angularfire2';
  import {Observable} from 'rxjs/Observable';
import {HomePage} from '../home/home'
import {QuizPage} from '../addQuiz/addQuiz'

@Page({
  templateUrl: 'build/pages/auth/auth.html'
})
export class AuthPage {
 
      constructor(public af: AngularFire , public nav :NavController) { }
     

      login() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }
    )
    
    .then(()=>{
      // this.nav.push(QuizPage)
       this.af.auth.subscribe((auth) => {
            console.log(auth.uid)
            if (auth.uid !== 'facebook:894651297328556') {
               this.nav.push(HomePage)          
                  }
             else if (auth.uid === 'facebook:894651297328556'){
                this.nav.push(QuizPage)            
            }
          });
    });
    
       
          
         
  }
  
}
