import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  event = { title: "", location: "", message: "", startDate: "", endDate: "" };

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public calendar: Calendar) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  save() {
    this.calendar.createEvent(this.event.title, this.event.location, 
                              this.event.message, new Date(this.event.startDate), 
                              new Date(this.event.endDate)).then(
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