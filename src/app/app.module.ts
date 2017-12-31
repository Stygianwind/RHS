import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {AspenPage} from '../pages/aspen/aspen';
import {HwPage} from '../pages/hw/hw';
import {LinksPage} from '../pages/links/links';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {HttpModule} from '@angular/http';
import { DetailsPage } from '../pages/details/details';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AspenPage,
    HwPage,
    LinksPage,
    DetailsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AspenPage,
    HwPage,
    LinksPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser

  ]
})
export class AppModule {}
