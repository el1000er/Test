import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from './shared/user';
import{AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userName: string;
  userList: User[] = [];
  activePage: string;

  constructor(
    public authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {}

  onLogin(userName: string) {
    this.userName = userName;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}