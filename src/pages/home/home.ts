import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { User } from '../../models/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // user: User;
  // isLoggedIn: boolean;  

  constructor(public navCtrl: NavController, 
              public storage: Storage,
              public google: GooglePlus,
              public alertCtrl: AlertController) {

  }
  // ionViewDidLoad(){}
  // login(){
  //   this.google.login({})
  //     .then(
  //       res => {
  //       console.log(res);
  //       this.user.displayName = res.displayName;
  //       this.user.email = res.email;
  //       this.user.familyName = res.familyName;
  //       this.user.givenName = res.givenName;
  //       this.user.userId = res.userId;
  //       this.user.imageUrl = res.imageUrl;

  //       this.isLoggedIn = true;
  //       this.save();
  //       this.alertCtrl.create({title: 'Ok', subTitle:this.user.displayName}).present();
  //     },
  //     err => this.alertCtrl.create({title: 'Fail', subTitle:'deu bosta'}).present()
  //   )
  //     .catch(err => console.error(err));
  // }

  // save(){
  //   this.storage.set('user',this.user);
  // }

}
