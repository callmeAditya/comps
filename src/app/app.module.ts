import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ElementsModule} from './elements/elements.module'
import {ViewsModule} from './views/views.module'
import {CollectionsModule} from './collections/collections.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    ViewsModule,
    CollectionsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
