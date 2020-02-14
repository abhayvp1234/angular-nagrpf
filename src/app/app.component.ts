import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   appList: any[] = [ {
      "ID": "1",
      "Name" : "India"
   },

   {
      "ID": "2",
      "Name" : "Canada"
   },
   {
      "ID": "3",
      "Name" : "USA"
   } ];

}