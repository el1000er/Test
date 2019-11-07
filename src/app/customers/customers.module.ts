import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import{CustomersRoutingModule} from './customers-routing.module';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'



@NgModule({
  declarations: [CustomerFormComponent],

  imports: [CustomersRoutingModule,
    MaterialModule,FormsModule,ReactiveFormsModule,CommonModule
  ]
})
export class CustomersModule { }
