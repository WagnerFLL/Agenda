import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Subject } from '../../models/subject';
import { Storage } from '@ionic/storage';
import { SubjectsPage } from '../subjects/subjects';

@IonicPage()
@Component({
  selector: 'page-add-subject',
  templateUrl: 'add-subject.html',
})
export class AddSubjectPage {

  public subject: Subject;
  public subjects: Subject[];
  public colors = [{ value:'c1',name:'Azul'},
                  { value:'c2',name:'Amarelo'},
                  { value:'c3',name:'Ciano'},
                  { value:'c4',name:'Escarlate'},
                  { value:'c5',name:'Sela'},
                  { value:'c6',name:'Magenta'},
                  { value:'c7',name:'Limão'},
                  { value:'c8',name:'Cardo'},
                  { value:'c9',name:'Cereja'}];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCtrl: AlertController) {
    this.subject = new Subject();
  }

  ionViewDidLoad() {
    this.storage.get('subjects').then(
      scc => this.subjects = scc,
      err => console.log(err)
    );
  }

  save(){
    if(!this.subject.name){
      this.alertCtrl.create({title: 'Erro!', 
                            subTitle:'O nome da disciplina é obrigatório. Preencha ao menos este campo.'})
                            .present();
      return;
    }

    this.subjects.push(this.subject);
    this.storage.set('subjects',this.subjects).then(
      scc => {
        this.alertCtrl.create({title: 'Ok!', subTitle: 'Disciplina salva com sucesso!'}).present();
        this.navCtrl.pop();
      }
    );

  }

}
