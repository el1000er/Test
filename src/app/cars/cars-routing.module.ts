import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CarDetailComponent} from './car-detail/car-detail.component';


const routes: Routes=[
  {
    path:'',
    component: CarListComponent,
  },
  {
    path: ':id',
    component: CarDetailComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class CarsRoutingModule { }
