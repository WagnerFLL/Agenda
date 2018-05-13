import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SieWebPage } from './sie-web';

@NgModule({
  declarations: [
    SieWebPage,
  ],
  imports: [
    IonicPageModule.forChild(SieWebPage),
  ],
})
export class SieWebPageModule {}
