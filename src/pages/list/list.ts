import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser'; 
import { Http } from '@angular/http';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',

})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: any;
  ogItems: any;
  myInput: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    let headerDict = {
      'Content-Type': 'application/json; charset=UTF-8'
    };
    var headers = new Headers(headerDict);
    var ob = this.http.post("http://ridgehigh.bernardsboe.com/Common/controls/StaffDirectory/ws/StaffDirectoryWS.asmx/GetUsersProfile",
    
    {
        "ptlInstanceId": "784617",
        "groupIds": ["14089579"],
        "pageIndex": 0,
        "criteria": {
          "PageSize": "300",
          "SortName": "first_names,last_name",
          "IsAscending": true,
          "QueryCriteria": [{"Name": "Name", "Value": ""}]
        
      }
    })
    .map(r=>r.json())
    .subscribe(response =>{
       this.ogItems = this.items = response.d.Result.StaffProfileList.sort((a, b) => {
          var textA = a.LastName.toUpperCase();
          var textB = b.LastName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        console.log(response);
        
        /*
        Email
:
"asyed@bernardsboe.com"
FirstName
:
"Adiba"
LastName
:
"Syed"
Name
:
"Adiba Syed"
PersonalWebsite
:
"http://www.oncoursesystems.com/school/view_webpage.asp?id=13856511"
Phone
:
""
Position
:
""
ProfileImage
:
"/common/resources/shared/images/DefaultDisplayPic.gif"
Properties
:
null
UserId
:
54729051
*/
    });
  
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
  onInput(event){
   let newItems= [];
    for (let item of this.ogItems){
      if (item["Name"].indexOf(this.myInput)!=-1){
        newItems.push(item);
      }
    }
    this.items= newItems;
  }
}
