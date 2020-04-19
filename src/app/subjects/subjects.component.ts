import {Component, OnInit} from '@angular/core';
import {Subject} from '../_models/subject';
import {SubjectService} from '../_services/subject.service';

@Component({
  selector: 'subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {


  subjects: Subject[];

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.subjectService.getSubjects('admin@gmail.com')
      .subscribe(subjectData => this.subjects = subjectData);
  }

}
