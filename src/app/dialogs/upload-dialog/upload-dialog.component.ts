import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AddManuallyDialogComponent } from '../add-manually-dialog/add-manually-dialog.component';
import { UploadButtonHeaderComponent } from '../upload-button-header/upload-button-header.component';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent {


  constructor(private dialog: MatDialog,public dialogRef: MatDialogRef<UploadDialogComponent>) {}


  handleButtonClick() {
    this.dialogRef.close();
    // Check if it is the first row
     const dialogRef = this.dialog.open(AddManuallyDialogComponent, {
       // Configure dialog options here
     });
 
     // Subscribe to dialog close event if needed
     dialogRef.afterClosed().subscribe(result => {
       // Handle dialog close event if needed
     });
   }

   handleButtonClickUpload(){
    const dialogRef = this.dialog.open(UploadButtonHeaderComponent, {
      // Configure dialog options here
    });
  }

  selectedAgency: string = '';
  noticeReceived: string = '';
  responsedue: string = '';
  context: string = '';

  isReadOnly: boolean = true; // Set to 'true' to make the input field non-editable
  inputValue: string = 'Initial value';

  onAgencySelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const agency: string = target.value as string;
    this.selectedAgency = agency === '' ? '' : 'Selected: ' + agency;
  }


  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  clearSelection() {
    this.selectedFile = null;
  }

  

  closeDialog(): void {
    this.dialogRef.close();
  }

  

}
