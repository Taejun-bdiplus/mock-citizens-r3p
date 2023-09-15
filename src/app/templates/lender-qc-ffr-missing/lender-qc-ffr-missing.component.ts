import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lender-qc-ffr-missing',
  templateUrl: './lender-qc-ffr-missing.component.html',
  styleUrls: ['./lender-qc-ffr-missing.component.css']
})
export class LenderQcFfrMissingComponent {

  constructor(public dialogRef: MatDialogRef<LenderQcFfrMissingComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
