import { Component, EventEmitter, Output, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { AddManuallyDialogComponent } from '../add-manually-dialog/add-manually-dialog.component';
import { UploadButtonHeaderComponent } from '../upload-button-header/upload-button-header.component';
import { HttpClient } from '@angular/common/http';
import { DragDropDirective } from '../drag-drop.directive';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.css']
})
export class UploadDialogComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  selectedFile: File | null = null;
  fileDragging = false;

  constructor(private dialog: MatDialog,public dialogRef: MatDialogRef<UploadDialogComponent>, private http: HttpClient) {}


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

  // /////////////////////////////////drag-drop///////////////////////

  

  onFileSelected(event: Event) {
    const inputElement = this.fileInput.nativeElement as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
      this.uploadFile(this.selectedFile);
    }
  }

  onFileDropped(file: File) {
    this.selectedFile = file;
    this.uploadFile(this.selectedFile);
  }

  private uploadFile(file: File) {
    // Your file upload logic here (e.g., display the file name, handle file data, etc.)
    console.log('File selected for upload:', file.name);
  }

  clearSelectedFile() {
    this.selectedFile = null;
  }


  
  // ////////////////////////////////////////////////////////////////


  

  

  clearSelection() {
    this.selectedFile = null;
  }

  

  closeDialog(): void {
    this.dialogRef.close();
  }

  

}
