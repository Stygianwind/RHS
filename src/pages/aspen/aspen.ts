import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the AspenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aspen',
  templateUrl: 'aspen.html',
})
export class AspenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
  }
  
  ionViewDidLoad() {
    const aspenBrowser = this.iab.create('https://nj-bernards.myfollett.com/aspen/logon.do');
    console.log('ionViewDidLoad AspenPage');
  }

}
