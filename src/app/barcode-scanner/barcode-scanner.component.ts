import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';


@Component({
  selector: 'barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
})
export class BarcodeScannerComponent implements AfterViewInit{

  @ViewChild(BarecodeScannerLivestreamComponent, {static: false})
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  ngAfterViewInit() {
    this.barecodeScanner.start();
  }

  onValueChanges(result){
    this.barcodeValue = result.codeResult.code;
    console.log(this.barcodeValue);
  }

  onStarted(started){
    console.log(started);
  }
}
