import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { EventT } from '../../models/event';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event: EventT;
  eventList: EventT[];
  date: string = new Date().toISOString();
  datef: string = new Date().toISOString();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public storage: Storage,
    public datePicker: DatePicker
    ) {
      this.event = navParams.get('event');
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddEventPage');
    this.storage.get('eventList').then(
      scc => { this.eventList = scc },
      err => { console.log(err) }
    );
  }
  
  setStartDate(){
    this.datePicker.show({
      date: this.event.startDate,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_DARK
    })
    .then( date => this.date = date.toISOString() );
  }
  
  setEndDate(){
    this.datePicker.show({
      date: this.event.startDate,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    })
    .then( date => this.datef = date.toISOString() );
  }

  save() {
    
    if(this.navParams.get('info') === 1){
      let n = this.navParams.get('position');
      console.log("Add-event n = "+n);
      this.eventList.splice(n,1);
    }

    this.eventList = this.eventList || [];
    this.event.startDate = new Date(this.date);
    this.event.endDate = new Date(this.datef);
    this.event.timeC = this.event.startDate.getTime();
    this.event.starDay = this.event.startDate.getUTCDate().toString();
    this.event.starMonth = (this.event.startDate.getMonth()+1).toString();
    this.event.starYear = this.event.startDate.getFullYear().toString();
    this.sort();
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
          subTitle: 'Enfrentamos um problema aqui. '+
                    'Entre em contato com o desenvolvedor e informe o problema. '+err,
          buttons: ['OK']
        });
        alert.present();
      }

    );
  }

  sort() {
    var length = this.eventList.length;
    for (var i = 0; i < length; i++) { 
      for (var j = 0; j < (length - i - 1); j++) { 
        if(this.eventList[j].timeC > this.eventList[j+1].timeC) {
          var tmp = this.eventList[j];  
          this.eventList[j] = this.eventList[j+1];
          this.eventList[j+1] = tmp; 
        }
      }        
    }
  }
  
}