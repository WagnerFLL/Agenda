import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Subject } from '../../models/subject';

@IonicPage()
@Component({
  selector: 'page-add-grade',
  templateUrl: 'add-grade.html',
})
export class AddGradePage {

  nameSubject: string;
  subject =  new Subject();
  subjects: Subject[];
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage) {
    this.nameSubject = navParams.get('name');
    this.storage.get('subjects').then(
      scc => scc.forEach(
        x => {
          if(x.name.localeCompare(this.nameSubject) === 0){
            this.subject = x;
          }
        } 
      ),
      err => console.log(err)      
    );
  }

  ionViewDidLoad() {
  }
}
