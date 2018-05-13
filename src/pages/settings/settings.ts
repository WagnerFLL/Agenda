import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public google: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  deleteAll(){
    this.storage.clear();
    this.alertCtrl.create({title:'Sucesso!',subTitle:"Dados removidos com sucesso!",buttons:["Ok"]}).present();
  }

  saveData(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde ...",
      duration: 5000
    });
    loader.present();
  }

  logoutGoogle(){
    this.google.logout().then(
      scc => this.alertCtrl.create({title:"Sucesso!",subTitle:"Usuário disconectado. Não é possível mais fazer acessar seus dados."}).present(),
      err => this.alertCtrl.create({title:"Falha!",subTitle:"Tente primeiro fazer login"}).present()
    );
  }

  loginGoogle(){
    this.google.login({});
  }

}
