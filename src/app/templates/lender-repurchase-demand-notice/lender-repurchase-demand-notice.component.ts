import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lender-repurchase-demand-notice',
  templateUrl: './lender-repurchase-demand-notice.component.html',
  styleUrls: ['./lender-repurchase-demand-notice.component.css']
})
export class LenderRepurchaseDemandNoticeComponent {

  constructor(public dialogRef: MatDialogRef<LenderRepurchaseDemandNoticeComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
