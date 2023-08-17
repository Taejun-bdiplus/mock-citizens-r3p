import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lrstemplate',
  templateUrl: './lrstemplate.component.html',
  styleUrls: ['./lrstemplate.component.css']
})
export class LrstemplateComponent {

  constructor(public dialogRef: MatDialogRef<LrstemplateComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
