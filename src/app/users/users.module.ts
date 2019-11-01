import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import{UsersRoutingModule} from './users-routing.module';
import { UserService } from '../services/user.service';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [ 
    
    UsersRoutingModule,   
    CommonModule,
    MaterialModule
   

  ],

  providers: [
    UserService,    
  ],
})
export class UsersModule { }
