import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalendarPage } from '../pages/calendar/calendar';
import { SchedulePage } from '../pages/schedule/schedule';
import { SubjectsPage } from '../pages/subjects/subjects';
import { GradesPage } from '../pages/grades/grades';
import { SieWebPage } from '../pages/sie-web/sie-web';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, icon:"ios-home" },
      { title: 'Calendário', component: CalendarPage, icon:"md-calendar"  },
      { title: 'Horário', component: SchedulePage, icon:"md-stopwatch"  },
      { title: 'Disciplinas', component: SubjectsPage, icon:"md-bookmarks"  },
      { title: 'Notas', component: GradesPage, icon:"md-school"  },
      { title: 'SieWeb', component: SieWebPage, icon:"md-school"  }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
