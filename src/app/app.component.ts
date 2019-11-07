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
  
  public now: Date = new Date();//this is to show date, it works but didn't use it

  today: number = Date.now();
  constructor(
    public authService: AuthService,
    private router: Router) 

    //this below is  to show date, it works but didn't use it
    {
      setInterval(()=> {this.now = new Date();
      },1);
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