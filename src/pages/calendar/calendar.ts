import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AddEventPage } from '../add-event/add-event';
import { Calendar } from '@ionic-native/calendar';
import { Storage } from '@ionic/storage';
import { EventT } from '../../models/event';

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  
  public eventList: EventT[];
  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  currentMonth: any;
  currentYear: any;
  currentDate: any;
  monthNames: string[] = 
  ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
  'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public calendar: Calendar,
    public storage: Storage,
    public alertCtrl: AlertController) {
    this.date = new Date();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
    this.getDaysOfMonth();
  }

  ionViewDidEnter(){
    this.storage.get("eventList").then(
      success => {
        this.eventList = success;
        console.log(this.eventList);
      },
      err => {
          let alert = this.alertCtrl.create({
          title: 'Falha!',
          subTitle: 'Enfrentamos um problema aqui. Entre em contato com o desenvolvedor e informe o problema. '+err,
          buttons: ['OK']
        }).present();
      }
    );
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentYear = this.date.getFullYear();
    console.log(this.currentYear + " " + this.currentMonth);
    
    if(this.date.getMonth() === new Date().getMonth()) {
      this.currentDate = new Date().getDate();
    } else {
      this.currentDate = 999;
    }
    
    var i;
    var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    for(i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
      this.daysInLastMonth.push(i);
    }
    console.log(this.daysInLastMonth);
    var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
    for (i = 0; i < thisNumOfDays; i++) {
      this.daysInThisMonth.push(i+1);
    }
    
    var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
    var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
    for (i = 0; i < (6-lastDayThisMonth); i++) {
      this.daysInNextMonth.push(i+1);
    }
    var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
    if(totalDays<36) {
      for(i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
        this.daysInNextMonth.push(i);
      }
    }
  }

  goToLastMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
    this.getDaysOfMonth();
  }

  goToNextMonth() {
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getDaysOfMonth();
  }

  addEvent() {
    this.navCtrl.push(AddEventPage, {info: 0, event: {title: null, message: "", startDate: null, endDate: null, location: null}});
  }

  editEvent(event: EventT){
    this.navCtrl.push(AddEventPage,{info: 1, event: event});
  }
  
  deleteEvent(event: EventT){
    this.eventList.splice(this.eventList.lastIndexOf(event));
  }
}