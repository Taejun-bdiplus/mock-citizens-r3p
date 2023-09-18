import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mi-qa-utr-rescission',
  templateUrl: './mi-qa-utr-rescission.component.html',
  styleUrls: ['./mi-qa-utr-rescission.component.css']
})
export class MiQaUtrRescissionComponent {

  constructor(public dialogRef: MatDialogRef<MiQaUtrRescissionComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
