import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LectureService} from '../_services/lecture.service';
import {SubjectService} from '../_services/subject.service';
import {Group} from '../_models/group';
import {Subject} from '../_models/subject';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'lecture-form',
  templateUrl: './lecture-form.component.html',
  styleUrls: ['./lecture-form.component.css']
})
export class LectureFormComponent implements OnInit {

  private groups: Group[];
  private subject: Subject;

  constructor(private route: ActivatedRoute, private lectureService: LectureService,
              private subjectService: SubjectService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.route.parent.parent.paramMap.subscribe(
      (params: ParamMap) => {
        let subjectId = params.get('subjectId');
        this.subjectService.getSubject(subjectId)
          .subscribe(subjectData => {
            this.subject = subjectData;
            this.groups = this.subject.groups;
          });
      }
    );
  }

  submit(lectureData) {
    lectureData.groups = this.groups;
    lectureData.subject = this.subject;
    lectureData.lecturerUsername = this.authService.getCurrentUser().username;
    let url = 'subjects/' + this.subject.name;
    this.lectureService.createLecture(lectureData).subscribe(response => {
      this.router.navigate([url]);
    });
  }
}
