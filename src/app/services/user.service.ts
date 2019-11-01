import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/user';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          (users: User[]) => {
            setTimeout(() => resolve(users), 2000);
          },
          (err) => setTimeout(() => reject(err), 5000));
    });
  }

  getUser(id: number): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.httpClient.get<User>('https://jsonplaceholder.typicode.com/users/' + id)
        .subscribe(
          (user: User) => {
            setTimeout(() => resolve(user), 2000);
          },
          (err) => {
            setTimeout(() => reject(err), 5000);
          });
    });
  }
}