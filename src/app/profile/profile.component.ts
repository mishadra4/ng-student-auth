import {Component, OnInit} from '@angular/core';
import {AuthService} from "../_services/auth.service";
import {User} from "../_models/user";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.getCurrentUser();
  }

}
