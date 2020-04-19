import {HttpClient} from '@angular/common/http';
import {Subject} from '../_models/subject';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {backendUrl} from '../../environments/environment';

@Injectable()
export class SubjectService {

  @Output() public change: EventEmitter<number> = new EventEmitter();

  constructor(private httpClient: HttpClient) {}

  getSubjects(username) {
    return this.httpClient.get<Subject[]>(backendUrl + "lecturer/" + username + "/subjects");
  }

  getSubject(subjectId) {
    return this.httpClient.get<Subject>(backendUrl + "subjects/" + subjectId);
  }

  onSubjectChange(subjectId) {
    this.change.emit(subjectId);
    console.log("event")
  }
}
