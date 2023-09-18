import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-operations-repurchase-demand',
  templateUrl: './operations-repurchase-demand.component.html',
  styleUrls: ['./operations-repurchase-demand.component.css']
})
export class OperationsRepurchaseDemandComponent {

  constructor(public dialogRef: MatDialogRef<OperationsRepurchaseDemandComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
