import {ErrorHandler, Injectable} from '@angular/core';
import {SimplePopupComponent} from '../simple-popup/simple-popup.component';
import {MatDialog} from '@angular/material';

const TEXT_DATA = 'Ой... Щось погане сталось, спробуй ще раз або звернись до адміністратора';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private matDialog: MatDialog) {}

  handleError(error: any): void {
    window.alert(TEXT_DATA);
    console.log('error: ' + error);
  }
}
