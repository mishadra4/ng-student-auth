import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {backendUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  invalidPassword: boolean;
  success: boolean;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  ngOnInit() {
  }

  submit(changePasswordData) {
    this.invalidPassword = false;
    changePasswordData.username = this.authService.getCurrentUser().username;
    this.httpClient.post<any>(backendUrl + 'user/password/change', changePasswordData).subscribe(data => this.success = true, error => this.handleError(error));
  }

  handleError(error) {
    console.log('error1: ' + error.message);
    this.invalidPassword = true;
  }

}
