import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{User} from '../shared/user';
import{AuthService} from '../services/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}

)



export class HomeComponent implements OnInit {
  userName: string;
  userList: User[] = [];
  activePage: string;

  constructor(public authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    
  }
  onLogin(userName: string) {
    this.userName = userName;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
