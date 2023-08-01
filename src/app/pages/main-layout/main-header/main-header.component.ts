import { Component } from '@angular/core';
import { UploadDialogComponent } from '../../..//dialogs/upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import { SharedService } from '../../../shared/shared.service';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})

export class MainHeaderComponent {
  selectedRole: string = ''; // Assuming selectedRole is of type string. You should set its value accordingly.
  
  constructor(private dialog: MatDialog, private http: HttpClient, private sharedService: SharedService) {
    this.sharedService.selectedRole$.subscribe(selectedRole => {
      this.selectedRole = selectedRole;
    });
  }



  private apiUrl = 'https://your-api-url.com/upload';


  upload() {
    const data = { /* Your data to be uploaded */ };
    this.http.post(this.apiUrl, data).subscribe(
      response => {
        console.log('Upload successful:', response);
        // Handle the response or any further actions on success
      },
      error => {
        console.error('Upload failed:', error);
        // Handle the error or any further actions on failure
      }
    );
  }

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