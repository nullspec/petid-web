import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private loggedIn = new Subject<any>();

  constructor(private http: Http) {}

  login(username: string, password: string) {
    return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.loggedIn.next(true);
        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.loggedIn.next(false);
  }

  getLoggedIn(): Observable<any> {
    return this.loggedIn.asObservable();
  }
}