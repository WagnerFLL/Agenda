import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Day } from '../../models/day';
import { Subject } from '../../models/subject';

@IonicPage()
@Component({
  selector: 'page-edit-schedule',
  templateUrl: 'edit-schedule.html',
})
export class EditSchedulePage {

  hourEdit: any;
  dayEdit: Day;
  nameDay: any;

  public hourStart: string;
  public hourEnd: string;
  public subject: Subject;

  subjects = ['mat','pt','en','hist','geo'];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage) {
    this.hourEdit = navParams.get('h');
    this.nameDay = navParams.get('day');
  }

  ionViewDidLoad() {
    this.storage.get(this.nameDay).then(
      scc => {
        this.dayEdit = scc;
        this.hourStart = this.dayEdit.schedule[this.hourEdit].start;
        this.hourEnd =  this.dayEdit.schedule[this.hourEdit].end;
        this.subject =  this.dayEdit.schedule[this.hourEdit].subject;
      },
      err => console.log(err)
    );
    
  }

  modifySchedule(){
    // this.dayEdit.
    // this.dayEdit[]
  }

}
