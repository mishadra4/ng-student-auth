import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {backendUrl} from "../../environments/environment";


@Injectable({providedIn: 'root'})
export class PasswordService {

  constructor(private httpClient: HttpClient) {
  }

  changePassword(changePasswordData) {
    return this.httpClient.post<any>(backendUrl + "user/password/change", changePasswordData);
  }

  /*startResetPasswordProcess(resetPasswordData) {
    return this.httpClient.post<any>(backendUrl + "password/reset/start", resetPasswordData);
  }

  resetPassword(resetPasswordData) {
    return this.httpClient.post<any>(backendUrl + "password/reset", resetPasswordData);
  }*/

}
