import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLogin: boolean;

  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  submit(credentials) {
    this.authService.authenticate(credentials).subscribe(result => {
      if (result) {
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        console.log(returnUrl);
        if (!returnUrl) {
          returnUrl = "/";
        }
        this.router.navigate([returnUrl]);
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
