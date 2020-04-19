import {Component, Injectable, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
@Injectable()
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getCurrentUserName() {
    let currentUser = this.authService.getCurrentUser();
    if(currentUser) {
      return currentUser.firstName + ' ' + currentUser.lastName;
    }
  }

  isLecturer() {
    return this.authService.isLecturer();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
}
