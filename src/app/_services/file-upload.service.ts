import { Injectable } from '@angular/core';
import {backendUrl} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadStudents(file) {
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(backendUrl + 'uploadStudents', formData).subscribe();
  }

  uploadLecturers(file) {
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(backendUrl + 'uploadLecturers', formData).subscribe();
  }

  uploadGroups(file) {
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(backendUrl + 'uploadGroups', formData).subscribe();
  }

  uploadSubjects(file) {
    let formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(backendUrl + 'uploadSubjects', formData).subscribe();
  }
}
