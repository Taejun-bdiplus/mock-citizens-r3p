import { Component } from '@angular/core';
import { UploadDialogComponent } from '../../..//dialogs/upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent {
  constructor(private dialog: MatDialog) {}

  handleButtonClick() {
     // Check if it is the first row
      const dialogRef = this.dialog.open(UploadDialogComponent, {
        // Configure dialog options here
      });

 
      // Subscribe to dialog close event if needed
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close event if needed
      });
    }
}