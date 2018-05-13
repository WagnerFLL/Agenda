import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { User } from '../../models/user';
import { Subject } from '../../models/subject';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  user: User;
  isLoggedIn: boolean;  
  subjects: Subject[];
  public faultSubjects: {name:string,url:string}[];

  constructor(public navCtrl: NavController, 
              public storage: Storage,
              public google: GooglePlus,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
    this.faultSubjects = [];
    this.storage.get('subjects').then(
      scc => {
        if(!scc) return;
        this.subjects = scc;
        this.subjects.forEach(
          x => {
            if(x.ab1 < 7 || x.ab2 < 7){
              this.faultSubjects.push({name:x.name,url:x.name});
            }
          }
        );
        console.log(this.faultSubjects);
      }
    );
  }

}
