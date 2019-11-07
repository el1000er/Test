import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {CarsModule} from './cars/cars.module';
import {CustomersModule} from './customers/customers.module';
import {CarsRoutingModule} from './cars/cars-routing.module';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  /*Lazy loaded below  */
  {
    path: 'users',
    loadChildren: '../app/users/users.module#UsersModule',
  },
  {
    path:'cars',
    loadChildren:() => CarsModule,
  },

  {
    path:'customers',
    loadChildren:() => CustomersModule,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}