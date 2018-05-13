import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Subject } from '../../models/subject';
import { AddGradePage } from '../add-grade/add-grade';

@IonicPage()
@Component({
  selector: 'page-grades',
  templateUrl: 'grades.html',
})
export class GradesPage {

  public subjects: Subject[];
  public nameSubjects: string[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCtrl: AlertController,
              public modal: ModalController) {
    this.storage.get('subjects').then(
      scc => {
        this.subjects = scc;
        this.initializeItems();
      },
      err => console.log(err)
    );    
  }

  // ionViewDidLoad() {}
  initializeItems() {
    if(!this.subjects) return;
    this.nameSubjects = [];    
    this.subjects.forEach(x => {
      this.nameSubjects.push(x.name);
    });    
  }

  getItems(ev) {
    this.initializeItems();
    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.nameSubjects = this.nameSubjects.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  setGrade(name){
    this.navCtrl.push(AddGradePage,{name: name});
  }

}
