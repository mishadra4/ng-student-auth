import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.css']
})
export class SimplePopupComponent implements OnInit {

  private data = '';
  private returnUrl = '/';

  constructor(@Inject(MAT_DIALOG_DATA) dialogData: any, private router: Router, public dialogRef: MatDialogRef<SimplePopupComponent>) {
    this.data = dialogData.text;
  }

  ngOnInit() {
  }

  closePopup() {
    this.dialogRef.close();
  }

}
