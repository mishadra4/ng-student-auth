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
export class QrCodeService {

  constructor(private httpClient: HttpClient) {
  }

  renewQrCode(lectureId) {
    console.log(backendUrl + 'qrCode/renew');
    return this.httpClient.post(backendUrl + 'qrCode/lecture/' + lectureId + '/renew', {}, httpOptions)
      .subscribe();
  }

}
