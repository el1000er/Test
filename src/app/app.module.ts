import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ServicesModule } from './services/services.module';
import { FormsModule }   from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material/material.module';

import{CustomersModule} from './customers/customers.module';
import{CarsModule} from './cars/cars.module';
import { CarsRoutingModule } from './cars/cars-routing.module';
import { CustomersRoutingModule } from './customers/customers-routing.module';
import {LoggedUserComponent} from './logged-user/logged-user.component';

import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    LoggedUserComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    ServicesModule,
    CarsRoutingModule,
    CarsModule,
    CustomersRoutingModule,
    CustomersModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
