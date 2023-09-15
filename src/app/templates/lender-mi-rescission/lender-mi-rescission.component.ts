import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lender-mi-rescission',
  templateUrl: './lender-mi-rescission.component.html',
  styleUrls: ['./lender-mi-rescission.component.css']
})
export class LenderMiRescissionComponent {

  constructor(public dialogRef: MatDialogRef<LenderMiRescissionComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}







