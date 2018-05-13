import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CalendarPage } from '../pages/calendar/calendar';
import { SchedulePage } from '../pages/schedule/schedule';
import { SubjectsPage } from '../pages/subjects/subjects';
import { GradesPage } from '../pages/grades/grades';
import { SieWebPage } from '../pages/sie-web/sie-web';
import { GooglePlus } from '@ionic-native/google-plus';
import { User } from '../models/user';
import { Storage } from '@ionic/storage';
import { Subject } from '../models/subject';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  user: User = {};
  isLoggedIn: boolean = false;  
  pages: Array<{title: string, component: any, icon: string}>;

  subjectsSave: Subject[] = [{name:'INGLÊS INSTRUMENTAL',code:'COMP200',ab1:9,ab2:8.6,color:'c1'},
                            {code:'COMP201',name:"PROGRAMAÇÃO 1",ab1:3,ab2:8,reav:10,color:'c2',url:"https://www.inf.pucrs.br/~pinho/LaproI/IntroC/IntroC.htm"},
                            {code:'COMP202', name:'LABORATÓRIO DE PROGRAMAÇÃO',ab1:7.90,ab2:8,color:'c3'},
                            {code:'COMP203',name:"FUNDAMENTOS DE MATEMÁTICA",ab1:8.65, ab2:9,color:'c4'},
                            {code:"COMP204",name:"GEOMETRIA ANALÍTICA",ab1:6.82,ab2:5.8,reav:6.4,final:8,color:'c5',url:"http://mundoeducacao.bol.uol.com.br/matematica/geometria-analitica.htm"},
                            {code:"COMP205", name:"INTRODUÇÃO À COMPUTAÇÃO",ab1:9.85, ab2:10,color:'c6'},
                            {code:"COMP206", name:"INTERNET E WEB",ab1:6.5,ab2:7.5 ,color:'c7',url:"https://www.w3schools.com/js/default.asp"},
                            {code:"COMP207",name:"LINGUAGENS FORMAIS E AUTÔMATOS",ab1:7.75,ab2:9,color:'c8'},
                            {code:"COMP208", name:"ESTRUTURA DE DADOS",ab1:5,ab2:9,color:'c9',url:"https://pt.wikipedia.org/wiki/Estrutura_de_dados"},
                            {code:"COMP209", name:"MATEMÁTICA DISCRETA", ab1:6, ab2:2.4,color:'c1',url:"https://pt.wikipedia.org/wiki/Matem%C3%A1tica_discreta"},
                            {code:"COMP210", name:"CÁLCULO 1", ab1:4.5, ab2:3,color:'c2',url:"https://www.mesalva.com/engenharia/matematica/calculo-diferencial-e-integral-i"},
                            {code:"COMP212", name:"METOLOGIA DA PESQUISA E DO TRABALHO CIENTÍFICO",ab1:9,ab2:9,color:'c3'},
                            {code:"COMP213", name:"LÓGICA APLICADA À COMPUTAÇÃO", ab1:7,ab2:7.3,color:'c4'},
                            {code:"COMP210",name:"CÁLCULO 1", ab1:7.1,ab2:6.8,reav:6,final:7.8,color:'c5',url:"https://www.mesalva.com/engenharia/matematica/calculo-diferencial-e-integral-i"},
                            {code:"COMP214", name:"TEORIA DA COMPUTAÇÃO", ab1:8.25,ab2:9,color:'c6'},
                            {code:"COMP215", name:"PROJETO DE SOFTWARE",ab1:10,ab2:9.7,reav:9.9,color:'c7'},
                            {code:"COMP216", name:"FÍSICA 1", ab1:9, ab2:9,color:'c8'},
                            {code:"COMP218", name:"CIRCUITOS DIGITAIS", ab1:8,ab2:6,reav:7,color:'c9',url:"https://www.mesalva.com/engenharia/eng-eletrica/circuitos-digitais"},
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
  


  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen, 
              public google: GooglePlus,
              public storage: Storage,
              public alertCtrl: AlertController) {
    this.initializeApp();
    this.user.imageUrl = 'assets/imgs/av.png';
    this.pages = [
      { title: 'Home', component: HomePage, icon:"ios-home" },
      { title: 'Calendário', component: CalendarPage, icon:"md-calendar"  },
      { title: 'Horário', component: SchedulePage, icon:"md-stopwatch"  },
      { title: 'Disciplinas', component: SubjectsPage, icon:"md-bookmarks"  },
      { title: 'Notas', component: GradesPage, icon:"md-school"  },
      { title: 'SieWeb', component: SieWebPage, icon:"md-cloud-download" },
      { title: 'Configurações', component: SettingsPage, icon:"ios-settings" }
    ];
    storage.set("subjectsSave",this.subjectsSave);
  }

  save(){
    // this.storage.set('user',this.user);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  logoutG(){
    this.google.logout()
      .then(res => {
        this.user.displayName = "";
        this.user.email = "";
        this.user.familyName = "";
        this.user.givenName = "";
        this.user.userId = "";
        this.user.imageUrl = "assets/imgs/av.png";

        this.isLoggedIn = false;
        this.storage.set('user',this.user);
      })
      .catch(err => this.alertCtrl.create({title: 'Ops!', subTitle:'Parece que tivemos problemas aqui, tente novamente depois.',buttons:["Ok"]}).present());
  }

  loginG(){
    this.google.login({}).then(
      res => {
        this.user.displayName = res.displayName;
        this.user.email = res.email;
        this.user.familyName = res.familyName;
        this.user.givenName = res.givenName;
        this.user.userId = res.userId;
        this.user.imageUrl = res.imageUrl;

        this.isLoggedIn = true;
        this.save();
      },
      err => this.alertCtrl.create({title: 'Ops!', subTitle:'Parece que tivemos problemas aqui, tente novamente depois.',buttons:["Ok"]}).present()
    );
  }

}
