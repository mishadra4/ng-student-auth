import {Component, OnInit} from '@angular/core';
import {LectureService} from '../_services/lecture.service';
import {Lecture} from '../_models/lecture';
import {Student} from '../_models/student';
import {ActivatedRoute} from '@angular/router';
import {backendUrl} from '../../environments/environment';
import {SubjectService} from '../_services/subject.service';
import {LabService} from '../_services/lab.service';
import {saveAs} from 'file-saver';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {

  lectures: Lecture[];


  student: Student[] = [];

  constructor(private lectureService: LectureService, private subjectService: SubjectService,
              private labService: LabService, private route: ActivatedRoute, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.route.parent.paramMap
      .subscribe(params => {
        let subjectId = params.get('subjectId');
        console.log(subjectId);
        this.getLectures(subjectId);
      });

  }

  getLectures(subjectId) {
    this.lectureService.getLecturesBySubject(subjectId)
      .subscribe(lecturesData => {
        lecturesData.sort((a, b) => a.name < b.name ? -1 : 1);
        this.lectures = lecturesData;
      });
  }

  generateReport() {
    this.httpClient.get(backendUrl + 'app/report/lectures/subject/' + this.lectures[0].subject.name, {responseType: 'blob'})
      .subscribe(data => saveAs(data, this.lectures[0].subject.name + '_ЗВІТ_ЛЕКЦІЇ.xlsx'));

  }
}
