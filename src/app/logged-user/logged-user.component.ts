import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styleUrls: ['./logged-user.component.css']
})
export class LoggedUserComponent implements OnInit {
  @Input() user: string;
  nameName: string;
  constructor() { }

  ngOnInit() {
    this.nameName = this.user;
  }

}
