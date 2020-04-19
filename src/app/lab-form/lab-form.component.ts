import {Component, OnInit} from '@angular/core';
import {Group} from '../_models/group';
import {Subject} from '../_models/subject';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LabService} from '../_services/lab.service';
import {SubjectService} from '../_services/subject.service';
import {AuthService} from '../_services/auth.service';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  private groups: Group[];
  private subject: Subject;
  private selectedGroup: Group;

  constructor(private route: ActivatedRoute, private labService: LabService,
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

  submit(labData) {
    labData.group = this.selectedGroup;
    labData.subject = this.subject;
    labData.lecturerUsername = this.authService.getCurrentUser().username;
    let url = 'subjects/' + this.subject.name;
    this.labService.createLab(labData).subscribe(response => {
      this.router.navigate([url]);
    });
  }
}
