import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): any {
    return this.http.get(`http://localhost:3000/users`).pipe(
      map((response: Response) => {
        return response[0];
      })
    );
  }
  createNewUser(user): any {
    return this.http.post('http://localhost:3000/users', user).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
}
