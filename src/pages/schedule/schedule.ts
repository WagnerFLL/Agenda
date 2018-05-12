import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Day } from '../../models/day';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  seg: Day = {schedule:[{start:'7:30',end:'9:10',subject:null},
                        {start:'9:20',end:'11:00',subject:null},
                        {start:'11:10',end:'12:50',subject:null}]};
  ter: Day = {schedule:[{start:'7:30',end:'9:10',subject:null},
                        {start:'9:20',end:'11:00',subject:null},
                        {start:'11:10',end:'12:50',subject:null}]};
  qua: Day = {schedule:[{start:'7:30',end:'9:10',subject:null},
                        {start:'9:20',end:'11:00',subject:null},
                        {start:'11:10',end:'12:50',subject:null}]};
  qui: Day = {schedule:[{start:'7:30',end:'9:10',subject:null},
                        {start:'9:20',end:'11:00',subject:null},
                        {start:'11:10',end:'12:50',subject:null}]};
  sex: Day = {schedule:[{start:'7:30',end:'9:10',subject:null},
                        {start:'9:20',end:'11:00',subject:null},
                        {start:'11:10',end:'12:50',subject:null}]};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
