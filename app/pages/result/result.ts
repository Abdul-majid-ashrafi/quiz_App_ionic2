import {Page  , NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home'

@Page({
  templateUrl: 'build/pages/result/result.html'
})
export class ResultPage {
  marks
    constructor(public nav : NavController, public navParam : NavParams){
      
      this.marks = this.navParam.data

          console.log("result",this.marks)   
    }
  
}
