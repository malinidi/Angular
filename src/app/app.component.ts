import { Component } from '@angular/core';

@Component({  //@Component decorator indicates the view for this component? If I want to define multiple views(Create, View, Edit), what is the option?
  selector: "pm-root", // Here 'pm-root' is called as custom html tag, which can be used in html files directly.
  /* 
  HTML views can defined in 2 ways. 1. inline template means HTML elements.2.relative path of HTML files.
  */
 
  template:`<div>
  <h1> Welcome to Hello World</h1>
  </div>`,
  templateUrl : "./app.component.html"
  /*
  If 'template' and 'templateUrl' both are defined, then priority to templateUrl means templateUrl file will be loaded.
  */
  /* template:`<div>
    <pm-products></pm-products>
   </div>`*/
})
export class AppComponent{
  pageTitle: string = "Acme Product Management";
  }