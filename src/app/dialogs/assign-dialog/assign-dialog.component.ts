import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-assign-dialog',
  templateUrl: './assign-dialog.component.html',
  styleUrls: ['./assign-dialog.component.css']
})
export class AssignDialogComponent {
  constructor(public dialogRef: MatDialogRef<AssignDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
