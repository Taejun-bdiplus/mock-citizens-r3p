import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lender-risk-alternative',
  templateUrl: './lender-risk-alternative.component.html',
  styleUrls: ['./lender-risk-alternative.component.css']
})
export class LenderRiskAlternativeComponent {

  constructor(public dialogRef: MatDialogRef<LenderRiskAlternativeComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
