import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  annIMGString: string;

  constructor(public navCtrl: NavController, private http: Http ) {
   this.annIMGString = "";
  }
  ionViewDidLoad()
  {
   
    this.http
      .get('http://bernardsboe-ridgehigh.ss5.sharpschool.com/cms/One.aspx?portalId=3097189&pageId=5762386')
      .map((res) => res.text())
      .subscribe(response => {
      let parser = new DOMParser();
      console.log("response is ", response);
      //const frame = document.querySelector('#annIMG');
      //console.log("Frame:");
      //console.log(frame);
      let parsedHtml = parser.parseFromString(response, 'text/html');
      let annIMG = parsedHtml.getElementById("news_content_body");
      this.annIMGString = annIMG.innerHTML;
      /*console.log(parsedHtml);
      console.log(annIMG);
      frame.appendChild(annIMG);*/
      });
  } 

}
