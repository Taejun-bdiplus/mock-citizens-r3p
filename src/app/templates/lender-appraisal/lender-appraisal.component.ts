import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lender-appraisal',
  templateUrl: './lender-appraisal.component.html',
  styleUrls: ['./lender-appraisal.component.css']
})
export class LenderAppraisalComponent {

  constructor(public dialogRef: MatDialogRef<LenderAppraisalComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
