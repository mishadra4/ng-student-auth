import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../_models/user';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {backendUrl} from '../../environments/environment';

const currentUserKey = 'currentUser';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '
  })
};

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem(currentUserKey)));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  authenticate(credentials) {
    return this.httpClient.post<any>(backendUrl + 'api/authenticate', JSON.stringify(credentials), httpOptions)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem(currentUserKey, JSON.stringify(user));
          this.currentUserSubject.next(user);
          return true;
        }

        return false;
      }));
  }

  logout() {
    localStorage.removeItem(currentUserKey);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    let user = this.getCurrentUser();
    if (user && user.token)
      return true;
    return false;
  }

  isAdmin() {
    let user = this.getCurrentUser();
    if (this.isLoggedIn() && user.roles.includes('ADMIN')) {
      return true;
    }
    return false;
  }

  isLecturer() {
    let user = this.getCurrentUser();
    if (this.isLoggedIn() && user.roles.includes('LECTURER')) {
      return true;
    }
    return false;
  }

  isStudent() {
    let user = this.getCurrentUser();
    if (this.isLoggedIn() && user.roles.includes('STUDENT')) {
      return true;
    }
    return false;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem(currentUserKey));
  }
}
