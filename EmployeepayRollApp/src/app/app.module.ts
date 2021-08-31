import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AddComponent } from './component/add/add.component';
//import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material/angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    
    //EmployeeDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
