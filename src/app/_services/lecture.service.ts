import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Lecture} from '../_models/lecture';
import {backendUrl} from '../../environments/environment';

@Injectable()
export class LectureService {

  @Output() public change: EventEmitter<number> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getLectures(username) {
    return this.httpClient
      .get<Lecture[]>(backendUrl + 'lecturer/' + username + '/lectures');
  }

  getLecturesBySubject(subjectId) {
    return this.httpClient
      .get<Lecture[]>(backendUrl + 'subject/' + subjectId + '/lectures');
    console.log("get lectures");
  }

  getLecture(id) {
    return this.httpClient
      .get<Lecture>(backendUrl + 'v1/lecture/' + id);
  }


  lectureClick(lectureId) {
    this.change.emit(lectureId);
  }

  createLecture(lectureData) {
    return this.httpClient.post<any>(backendUrl + "lecture/create", JSON.stringify(lectureData), httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
