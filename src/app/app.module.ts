import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule, //Every application should import, since browse to load any Angular.
    FormsModule // This is ngModule used in the products-list html.since form structural directive [ngModule] available in the browser module.
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent] //@MLC: This bootstrap indicates the starting component of application.
})
export class AppModule { }
