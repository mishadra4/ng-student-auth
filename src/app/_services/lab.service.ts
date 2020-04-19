import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Lab} from '../_models/lab';
import {backendUrl} from '../../environments/environment';

@Injectable()
export class LabService {

  @Output() public change: EventEmitter<number> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getLabs(username) {
    return this.httpClient
      .get<Lab[]>(backendUrl + 'lecturer/' + username + '/labs');
  }

  getLabsBySubject(subjectId, groupId) {
    return this.httpClient
      .get<Lab[]>(backendUrl + 'subject/' + subjectId + '/labs');
  }

  getLab(id) {
    return this.httpClient
      .get<Lab>(backendUrl + 'v1/lab/' + id);
  }


  labClick(labId) {
    this.change.emit(labId);
  }

  createLab(labData) {
    return this.httpClient.post<any>(backendUrl + "lab/create", JSON.stringify(labData), httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
