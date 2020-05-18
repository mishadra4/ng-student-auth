import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {backendUrl} from '../../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) {
  }

  enrollStudent(lectureId, username) {
    console.log(backendUrl + 'lecture/' + lectureId + '/student/' + username + '/enroll');
    return this.httpClient.post(backendUrl + 'lecture/' + lectureId + '/student/' + username + '/enroll', {}, httpOptions);
  }

  checkStudent(lectureId, username) {
    console.log(backendUrl + 'lecture/' + lectureId + '/student/' + username + '/enroll');
    return this.httpClient.post(backendUrl + 'lecture/' + lectureId + '/student/' + username + '/check', {}, httpOptions)
      .subscribe();
  }

  checkStudentForLab(labId, username) {
    console.log(backendUrl + 'lab/' + labId + '/student/' + username + '/enroll');
    return this.httpClient.post(backendUrl + 'lab/' + labId + '/student/' + username + '/check', {}, httpOptions)
      .subscribe();
  }

}
