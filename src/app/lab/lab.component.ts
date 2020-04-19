import {Component, OnInit} from '@angular/core';
import {Lab} from '../_models/lab';
import {Student} from '../_models/student';
import {LabService} from '../_services/lab.service';
import {StudentService} from '../_services/student.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  lab: Lab = new Lab();

  students: Student[] = [];

  imgPath: string;

  status: boolean = false;

  formattedLabDate: string = '';

  constructor(private labService: LabService, private studentService: StudentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        let labId = params.get('labId');
        this.labService.getLab(labId)
          .subscribe(labData => {
            this.processStudents(labData);
            this.formattedLabDate = formatDate(this.lab.labDate, 'dd/MM/yyyy', 'en-US') || '';
          });
      });
  }

  processStudents(labData) {
    this.lab = labData;
    try {
      this.students = this.lab.group.students;
    } catch (e) {
      this.students = [];
    }
    this.imgPath = 'https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=' + this.lab.filePath;
  }

  enrollStudent(labId, username) {
    this.studentService.checkStudentForLab(labId, username);
  }

  clickEvent() {
    this.status = !this.status;
  }

  getFormattedLabDate() {
    return this.formattedLabDate;
  }

}
