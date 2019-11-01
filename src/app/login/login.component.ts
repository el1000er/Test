import { Component, OnInit } from '@angular/core';

import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};


  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

  loginUser(userForm:any){
    this.authService.login(userForm.userName);
  }

}
