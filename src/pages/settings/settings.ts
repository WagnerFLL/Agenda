import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GooglePlus } from '@ionic-native/google-plus';
import { Subject } from '../../models/subject';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  subjectsSave: Subject[] = [{name:'INGLÊS INSTRUMENTAL',code:'COMP200',ab1:9,ab2:8.6,color:'c1'},
                            {code:'COMP201',name:"PROGRAMAÇÃO 1",ab1:3,ab2:8,reav:10,color:'c2'},
                            {code:'COMP202', name:'LABORATÓRIO DE PROGRAMAÇÃO',ab1:7.90,ab2:8,color:'c3'},
                            {code:'COMP203',name:"FUNDAMENTOS DE MATEMÁTICA",ab1:8.65, ab2:9,color:'c4'},
                            {code:"COMP204",name:"GEOMETRIA ANALÍTICA",ab1:6.82,ab2:5.8,reav:6.4,final:8,color:'c5'},
                            {code:"COMP205", name:"INTRODUÇÃO À COMPUTAÇÃO",ab1:9.85, ab2:10,color:'c6'},
                            {code:"COMP206", name:"INTERNET E WEB",ab1:6.5,ab2:7.5 ,color:'c7'},
                            {code:"COMP207",name:"LINGUAGENS FORMAIS E AUTÔMATOS",ab1:7.75,ab2:9,color:'c8'},
                            {code:"COMP208", name:"ESTRUTURA DE DADOS",ab1:5,ab2:9,color:'c9'},
                            {code:"COMP209", name:"MATEMÁTICA DISCRETA", ab1:6, ab2:2.4,color:'c1'},
                            {code:"COMP210", name:"CÁLCULO 1", ab1:4.5, ab2:3,color:'c2'},
                            {code:"COMP212", name:"METOLOGIA DA PESQUISA E DO TRABALHO CIENTÍFICO",ab1:9,ab2:9,color:'c3'},
                            {code:"COMP213", name:"LÓGICA APLICADA À COMPUTAÇÃO", ab1:7,ab2:7.3,color:'c4'},
                            {code:"COMP210",name:"CÁLCULO 1", ab1:7.1,ab2:6.8,reav:6,final:7.8,color:'c5'},
                            {code:"COMP214", name:"TEORIA DA COMPUTAÇÃO", ab1:8.25,ab2:9,color:'c6'},
                            {code:"COMP215", name:"PROJETO DE SOFTWARE",ab1:10,ab2:9.7,reav:9.9,color:'c7'},
                            {code:"COMP216", name:"FÍSICA 1", ab1:9, ab2:9,color:'c8'},
                            {code:"COMP218", name:"CIRCUITOS DIGITAIS", ab1:8,ab2:6,reav:7,color:'c9'},
                            {code:"COMP219", name:"PROJETOS E ANÁLISES DE ALGORITIMOS",ab1:7.5,ab2:7.2,color:'c1'},
                            {code:"COMP220", name:"BANCO DE DADOS", ab1:9,ab2:8.5,color:'c2'},
                            {code:"COMP217", name:"CÁLCULO 2",ab1:7.5,color:'c3'},
                            {code:"COMP221", name:"PROBABILIDADE E ESTATÍTICA",color:'c4'},
                            {code:"COMP222", name:"METODOLOGIA E PROCESSOS",ab1:9,color:'c5'},
                            {code:"COMP223", name:"FÍSICA 2",color:'c6'},
                            {code:"COMP225", name:"ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES",ab1:9.17,color:'c7'},
                            {code:"COMP226", name:"CONCEITOS DE LINGUAGENS DE PROGRAMAÇÃO",color:'c8'},
                            {code:"COMP227", name:"BANCO DE DADOS 2",color:'c9'},
                            {code:"COMP228", name:"FÍSICA EXPERIMENTAL",ab1:8.2,color:'c1'}
                            ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public storage: Storage,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public google: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  deleteAll(){
    this.storage.clear();
    this.alertCtrl.create({title:'Sucesso!',subTitle:"Dados removidos com sucesso!",buttons:["Ok"]}).present();
    this.storage.set('subjectsSave',this.subjectsSave);
  }

  saveData(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde ...",
      duration: 5000
    });
    loader.present();
  }

  logoutGoogle(){
    this.google.logout().then(
      scc => this.alertCtrl.create({title:"Sucesso!",subTitle:"Usuário disconectado. Não é possível mais fazer acessar seus dados."}).present(),
      err => this.alertCtrl.create({title:"Falha!",subTitle:"Tente primeiro fazer login"}).present()
    );
  }

  loginGoogle(){
    this.google.login({});
  }

}
