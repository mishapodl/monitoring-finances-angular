import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<User> {
    return this.http
      .get(`http://localhost:3000/users?email=${email}`)
      .map((response: HttpResponse) => response.json())
      .map((user: User[]) => (user[0] ? user[0] : undefined));
  }
}
