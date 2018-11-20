import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewTaskComponent } from './task/view/view.component';
import { AddTaskComponent } from './task/add/add.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ViewTaskComponent, AddTaskComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
