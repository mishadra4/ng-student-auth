import { Component, OnInit } from '@angular/core';
import {FileUploadService} from '../_services/file-upload.service';

@Component({
  selector: 'app-data-upload',
  templateUrl: './data-upload.component.html',
  styleUrls: ['./data-upload.component.css']
})
export class DataUploadComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit() {
  }

  uploadStudents($event) {
    let file: File = $event.target.files[0];
    this.fileUploadService.uploadStudents(file);
  }

  uploadLecturers($event) {
    let file: File = $event.target.files[0];
    this.fileUploadService.uploadLecturers(file);
  }

  uploadGroups($event) {
    let file: File = $event.target.files[0];
    this.fileUploadService.uploadGroups(file);
  }

  uploadSubjects($event) {
    let file: File = $event.target.files[0];
    this.fileUploadService.uploadSubjects(file);
  }

}
