import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  item: any;
  websitethere: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    this.item = navParams.get('item');
    if (this.item.PersonalWebsite){
      this.websitethere= true;
    }
    else this.websitethere=false;
  
  }
  openWeb(url){
     this.iab.create(url);
  }
  mailto(email) {
    window.open(`mailto:${email}`, '_system');
 }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad DetailsPage');
  }

}
