import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-button-header',
  templateUrl: './upload-button-header.component.html',
  styleUrls: ['./upload-button-header.component.css']
})
export class UploadButtonHeaderComponent {


  constructor(public dialogRef: MatDialogRef<UploadButtonHeaderComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  reportsTableData = [
    { column1: '0123456789', column2: '0123456789', column3: 'Row 1 - Column 3', column4: 'Row 1 - Column 4', column5: 'Row 1 - Column 5', column6: "c6", column7: "c7" },
    { column1: '0123456789', column2: '0123456789', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5', column6: "c6", column7: "c7" },
    { column1: '0123456789', column2: '0123456789', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5', column6: "c6", column7: "c7" },
    { column1: '0123456789', column2: '0123456789', column3: 'Row 1 - Column 3', column4: 'Row 1 - Column 4', column5: 'Row 1 - Column 5', column6: "c6", column7: "c7" },
    { column1: '0123456789', column2: '0123456789', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5', column6: "c6", column7: "c7" },
    { column1: '0123456789', column2: '0123456789', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5', column6: "c6", column7: "c7" },
    // { column1: 'Row 3 - Column 1', column2: 'Row 3 - Column 2', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5', column6: "c6", column7: "c7" },
    // { column1: 'Row 3 - Column 1', column2: 'Row 3 - Column 2', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5', column6: "c6", column7: "c7" },
    // Add more rows as needed
  ];

}
