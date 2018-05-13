import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Calendar } from '@ionic-native/calendar';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AddEventPage } from '../pages/add-event/add-event';
import { CalendarPage } from '../pages/calendar/calendar';
import { GradesPage } from '../pages/grades/grades';
import { SchedulePage } from '../pages/schedule/schedule';
import { SubjectsPage } from '../pages/subjects/subjects';
import { IonicStorageModule } from '@ionic/storage';
import { DatePicker } from '@ionic-native/date-picker';
import { EditSchedulePage } from '../pages/edit-schedule/edit-schedule';
import { AddSubjectPage } from '../pages/add-subject/add-subject';
import { AddGradePage } from '../pages/add-grade/add-grade';
import { SieWebPage } from '../pages/sie-web/sie-web';
import { GooglePlus } from '@ionic-native/google-plus';
import { SettingsPage } from '../pages/settings/settings';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddEventPage,
    EditSchedulePage,
    CalendarPage,
    GradesPage,
    SchedulePage,
    SubjectsPage,
    AddSubjectPage,
    AddGradePage,
    SieWebPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'Agenda',
      storeName: 'data',
      driverOrder: ['indexeddb']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddEventPage,
    CalendarPage,
    GradesPage,
    SchedulePage,
    SubjectsPage,
    EditSchedulePage,
    AddSubjectPage,
    AddGradePage,
    SieWebPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,
    DatePicker,
    GooglePlus,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
