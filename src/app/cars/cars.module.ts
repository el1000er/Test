import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CarsRoutingModule} from './cars-routing.module';

import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [CarListComponent, CarDetailComponent],
  
  
  imports: [CommonModule,CarsRoutingModule,MaterialModule,
    
  ]
})
export class CarsModule { }
