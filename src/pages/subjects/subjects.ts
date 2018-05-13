import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { Subject } from '../../models/subject';
import { Storage } from '@ionic/storage';
import { AddSubjectPage } from '../add-subject/add-subject';

@IonicPage()
@Component({
  selector: 'page-subjects',
  templateUrl: 'subjects.html',
})
export class SubjectsPage {

  subjects: Subject[];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public modal: ModalController,
              public alertCtrl: AlertController) {
  }

  ionViewWillEnter() { 
    this.storage.get('subjects').then(
      scc => {
        if(scc) this.subjects = scc;
        else this.storage.set('subjects',[]);
      },
      err => console.log(err)
    );
  }

  addSubject(){
    this.modal.create(AddSubjectPage).present();
  }

  deleteSubject(subject: Subject){
    let alert = this.alertCtrl.create({title: 'Deseja deletar?', 
                          subTitle:'Todas as informações sobre esta disciplina desaparecerão.'})
    alert.addButton({text: 'Cancelar'});
    alert.addButton({text: 'Confirmar', handler: x =>{
      this.subjects.splice(this.subjects.lastIndexOf(subject),1);
      this.storage.set('subjects',this.subjects);
    } 
    });
    alert.present();
  }
}
