import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-manually-dialog',
  templateUrl: './add-manually-dialog.component.html',
  styleUrls: ['./add-manually-dialog.component.css']
})
export class AddManuallyDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddManuallyDialogComponent>) {}

  selectedAgency: string = '';
  noticeReceived: string = '';
  responsedue: string = '';
  loan: string = '';

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


  firstOptions = ['Self Reporting', 'Repurchase', 'FER', 'QA Audit', 'MI FER','MI QA Audit','GOV Audit'];
  secondOptions: string[] = [];

  onFirstOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'Self Reporting') {
      this.secondOptions = ['Option 1 - A', 'Option 1 - B', 'Option 1 - C'];
    } else if (selectedValue === 'Repurchase') {
      this.secondOptions = ['Option 2 - A', 'Option 2 - B', 'Option 2 - C'];
    } else if (selectedValue === 'FER') {
      this.secondOptions = ['Option 3 - A', 'Option 3 - B', 'Option 3 - C'];
    } 

    else if (selectedValue === 'QA Audit') {
      this.secondOptions = ['Option 4 - A', 'Option 4 - B', 'Option 4 - C'];
    }
    else if (selectedValue === 'MI FER') {
      this.secondOptions = ['Option 5 - A', 'Option 5 - B', 'Option 5 - C'];
    }
    else if (selectedValue === 'MI QA Audit') {
      this.secondOptions = ['Option 6 - A', 'Option 6 - B', 'Option 6 - C'];
    }
    else if (selectedValue === 'GOV Audit') {
      this.secondOptions = ['Option 7 - A', 'Option 7 - B', 'Option 7 - C'];
    }
    
    else {
      // Default options for other cases
      this.secondOptions = [];
    }
  }
  


}
