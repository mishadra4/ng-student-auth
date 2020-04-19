import {Component, OnInit, ViewChild} from '@angular/core';
import {LectureService} from '../_services/lecture.service';
import {Lecture} from '../_models/lecture';
import {Student} from '../_models/student';
import {StudentService} from '../_services/student.service';
import {ActivatedRoute} from '@angular/router';
import {MatSort, MatTableDataSource} from '@angular/material';
import {formatDate} from '@angular/common';

@Component({
  selector: 'lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {

  @ViewChild(MatSort, {static: false})
  sort: MatSort;

  lecture: Lecture = new Lecture();

  students: Student[] = [];

  imgPath: string;

  status: boolean = false;
  displayedColumns: string[] = ['groupName', 'firstName', 'lastName', 'checked'];
  dataSource;

  constructor(private lectureService: LectureService, private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let lectureId = params.get('lectureId');
        this.lectureService.getLecture(lectureId)
          .subscribe(lectureData => this.processStudents(lectureData));
      });
  }

  processStudents(lectureData) {
    this.lecture = lectureData;
    try {
      this.students = this.lecture.groups
        .map(group => group.students)
        .map(students => students.sort((a, b) => a.id < b.id ? -1 : 1))
        .filter(studentsData => studentsData.length > 0)
        .reduce((st1, st2) => [...st1, ...st2]);
    } catch (e) {
      this.students = [];
    }

    this.lecture.formattedDate = formatDate(this.lecture.lectureDate, 'dd/MM/yyyy', 'en-US');

    this.dataSource = new MatTableDataSource(this.students);
    this.dataSource.sort = this.sort;
    this.imgPath = 'https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=' + this.lecture.filePath;
  }

  getDataSource(group) {
    let dataSource = new MatTableDataSource(group.students);
    dataSource.sort = this.sort;
    return dataSource;
  }

  enrollStudent(lectureId, username) {
    this.studentService.checkStudent(lectureId, username);
  }

  clickEvent() {
    this.status = !this.status;
    console.log(this.status);
  }

  getFormattedDate() {
    return this.lecture.formattedDate;
  }

}
