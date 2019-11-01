import { Component, OnInit } from '@angular/core';
import{User} from '../../shared/user';
import{UserService} from '../../services/user.service';
import{Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: User[] = [];

  constructor(
    private userService:UserService,
    private router: Router,
    private location:Location) { }

  async ngOnInit() {
    this.userList = await this.userService.getUsers();
  }

  goBack(): void {
    this.location.back();
  }
  
}
