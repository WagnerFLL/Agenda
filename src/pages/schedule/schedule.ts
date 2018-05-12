import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Day } from '../../models/day';
import { EditSchedulePage } from '../edit-schedule/edit-schedule';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  seg: Day = {name: 'seg', schedule:[{start:'7:30',end:'9:10',subject:null,h:0},
                        {start:'9:20',end:'11:00',subject:null,h:1},
                        {start:'11:10',end:'12:50',subject:null,h:2}]};
  ter: Day = {name: 'ter', schedule:[{start:'7:30',end:'9:10',subject:null,h:0},
                        {start:'9:20',end:'11:00',subject:null,h:1},
                        {start:'11:10',end:'12:50',subject:null,h:2}]};
  qua: Day = {name: 'qua', schedule:[{start:'7:30',end:'9:10',subject:null,h:0},
                        {start:'9:20',end:'11:00',subject:null,h:1},
                        {start:'11:10',end:'12:50',subject:null,h:2}]};
  qui: Day = {name: 'qui', schedule:[{start:'7:30',end:'9:10',subject:null,h:0},
                        {start:'9:20',end:'11:00',subject:null,h:1},
                        {start:'11:10',end:'12:50',subject:null,h:2}]};
  sex: Day = {name: 'sex', schedule:[{start:'7:30',end:'9:10',subject:null,h:0},
                        {start:'9:20',end:'11:00',subject:null,h:1},
                        {start:'11:10',end:'12:50',subject:null,h:2}]};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public modal: ModalController,
              public alertCtrl: AlertController) {
    storage.get('created').then(
      scc => {
        console.log(scc);
        
        if(!scc){
          this.storageSchedule();
        }
      }
    );
  }

  ionViewWillEnter() {
    this.storage.get('seg').then(
      scc => {
        if(!scc){
          this.storage.set('seg',this.seg);
        }
        this.seg = scc || this.seg
      },
      err => console.log(err)
    );
    this.storage.get('ter').then(
      scc =>{
        if(!scc){
          this.storage.set('ter',this.ter);
        }
        this.ter = scc || this.ter
      },
      err => console.log(err)
    );
    this.storage.get('qua').then(
      scc => {
        if(!scc){
          this.storage.set('qua',this.qua);
        }
        this.qua = scc || this.qua
      },
      err => console.log(err)
    );
    this.storage.get('qui').then(
      scc => {
        if(!scc){
          this.storage.set('qui',this.qui);
        }
        this.qui = scc || this.qui
      },
      err => console.log(err)
    );
    this.storage.get('sex').then(
      scc => {
        if(!scc){
          this.storage.set('sex',this.sex);
        }
        this.sex = scc || this.sex
      },
      err => console.log(err)
    );
  }
  
  storageSchedule(){
    this.storage.set('created',true).then(
      scc => this.alertCtrl.create({title: 'deu bom'}).present(),
      err => this.alertCtrl.create({title: 'deu ruim'}).present()
    );
    this.storage.set('qua',this.qua);
    this.storage.set('qui',this.qui);
    this.storage.set('sex',this.sex);
    this.storage.set('seg',this.seg);
    this.storage.set('ter',this.ter);
  }

  editSchedule(h,day:Day){
    this.modal.create(EditSchedulePage,{h: h, day: day.name}).present();
  }

}
