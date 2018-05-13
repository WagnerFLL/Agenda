import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Day } from '../../models/day';
import { Subject } from '../../models/subject';
import { SchedulePage } from '../schedule/schedule';

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
  public subjectName = '';
  public subjects: Subject[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCrtl: AlertController) {

    this.hourEdit = navParams.get('h');
    this.nameDay = navParams.get('day');
  }

  ionViewDidLoad() {
    this.storage.get(this.nameDay).then(
      scc => {
        this.dayEdit = scc;
        this.hourStart = this.dayEdit.schedule[this.hourEdit].start;
        this.hourEnd =  this.dayEdit.schedule[this.hourEdit].end;
        this.subject =  new Subject();
      },
      err => console.log(err)
    );
    this.storage.get('subjects').then(
      scc => {
        if(!scc){
          this.alertCrtl.create({title: 'Ops!',
                                subTitle:'Parece que você ainda não adicionou nenhuma disciplina.'+
                                              ' Volte aqui depois de adicionar alguma!',
                                buttons: ['Ok']}).present();
        }
        else this.subjects = scc;
      },
      err => console.log(err)      
    );
  }

  save(){
    if(!this.subjects) return;
    this.subjects.forEach(
      x => {
        if(x.name.localeCompare(this.subjectName) === 0){
          this.dayEdit.schedule[this.hourEdit].subject = x;
          this.navCtrl.pop();
        }
      }
    );
    this.storage.set(this.nameDay,this.dayEdit);
  }

}
