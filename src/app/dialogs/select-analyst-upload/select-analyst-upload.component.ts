import { Component , EventEmitter, Output, Input} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-analyst-upload',
  templateUrl: './select-analyst-upload.component.html',
  styleUrls: ['./select-analyst-upload.component.css']
})
export class SelectAnalystUploadComponent {

  constructor(public dialogRef: MatDialogRef<SelectAnalystUploadComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  responsedue: string = '';

  /////////////////////////////////////////////////////////////////


  

  tableData = [
    { column1: 'John Doe', column2: 'Value 1', column3: 'Data 1', selected: false },
    { column1: 'David Doe', column2: 'Value 2', column3: 'Data 2', selected: false },
    // ... Add more rows
  ];

  

  

  

  

}
