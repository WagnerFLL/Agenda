import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EventT } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event: EventT;
  eventList: EventT[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage
    ) {
      this.event = navParams.get('event');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
    this.storage.get('eventList').then(
      scc => {
        this.eventList = scc;
      },
      err => { console.log(err) }
    );
  }

  save() {
    if(this.navParams.get('info') === 1) this.eventList.splice( this.eventList.lastIndexOf(this.navParams.get('event')));
    this.eventList = this.eventList || [];
    this.eventList.push(this.event);
    console.log(this.eventList);
    this.storage.set('eventList',this.eventList).then(
      msg => {
        let alert = this.alertCtrl.create({
          title: 'Sucesso!',
          subTitle: 'Evento salvo com sucesso.',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      err => {
        let alert = this.alertCtrl.create({
          title: 'Falha!',
          subTitle: 'Enfrentamos um problema aqui. Entre em contato com o desenvolvedor e informe o problema. '+err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
  
}