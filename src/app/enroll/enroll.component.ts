import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {StudentService} from '../_services/student.service';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  private username: string;

  private success: boolean;

  constructor(private route: ActivatedRoute, private studentService: StudentService, private authService: AuthService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        let lectureId = params.get('lectureId');
        let username = this.authService.getCurrentUser().username;
        this.username = username;
        console.log('lecture = ' + lectureId +  ' username = ' + username);
        if (lectureId && username) {
          this.studentService.enrollStudent(lectureId, username).subscribe(() => this.success = true, error => this.success = false);
        }
      }
    );
  }

}
