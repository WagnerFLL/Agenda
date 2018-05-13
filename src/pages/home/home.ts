import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { User } from '../../models/user';
import { Subject } from '../../models/subject';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  user: User;
  isLoggedIn: boolean;  
  subjects: Subject[];
  public faultSubjects: Subject[];

  constructor(public navCtrl: NavController, 
              public storage: Storage,
              public google: GooglePlus,
              public alertCtrl: AlertController,
              public broswer: InAppBrowser) {

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
              this.faultSubjects.push(x);
            }
          }
        );
        console.log(this.faultSubjects);
      }
    );
  }

  showSite(data){
    this.broswer.create(data.url).show();
  }

}
