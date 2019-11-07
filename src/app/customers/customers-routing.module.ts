import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {CustomerFormComponent} from './customer-form/customer-form.component';


const routes: Routes=[
  {
    path:'',
    component: CustomerFormComponent,
  },
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CustomersRoutingModule { }
