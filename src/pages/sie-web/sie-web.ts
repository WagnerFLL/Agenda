import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-sie-web',
  templateUrl: 'sie-web.html',
})
export class SieWebPage {

  password: string;
  cpf: string;
  isConected: boolean = false;
  keepConected: boolean = false;
  keepData: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCrtl: AlertController,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SieWebPage');
  }

  login(){
    if(!this.cpf || !this.password){
      this.alertCrtl.create({title: 'Ops!', subTitle:'Por favor, preencha os campos corretamente!', buttons:['Ok']}).present();
      return;
    }

    if(!this.validarCPF(this.cpf) || !(this.password.length > 6)){
      this.alertCrtl.create({title: 'Ops!', subTitle:'CPF ou senha inválidos!', buttons:['Ok']}).present();
      return;
    }

    if(this.cpf.toString().localeCompare('12884123474') === 0){
      this.presentLoading();
    }

  }

  validarCPF(cpf){
    cpf = cpf.replace(/[^\d]+/g,'');    
    if(cpf == '') return false; 
    if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
        return false;       
    let add = 0;    
    let rev; 
    let i;
    for (i=0; i < 9; i ++)       
      add += parseInt(cpf.charAt(i)) * (10 - i);  
      rev = 11 - (add % 11);  
      if (rev == 10 || rev == 11)     
        rev = 0;    
      if (rev != parseInt(cpf.charAt(9)))     
        return false;       
    add = 0;    
    for (i = 0; i < 10; i ++)        
      add += parseInt(cpf.charAt(i)) * (11 - i);  
      rev = 11 - (add % 11);  
      if (rev == 10 || rev == 11) 
        rev = 0;    
      if (rev != parseInt(cpf.charAt(10)))
      return false;       
    return true;   
  }

  presentLoading(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde ...",
      duration: 3000
    });
    loader.present();
    this.isConected = true;
  }

}
