import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-operations-qc-ffr-missing',
  templateUrl: './operations-qc-ffr-missing.component.html',
  styleUrls: ['./operations-qc-ffr-missing.component.css']
})
export class OperationsQcFfrMissingComponent {

  constructor(public dialogRef: MatDialogRef<OperationsQcFfrMissingComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
