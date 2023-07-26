import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hoc-report-dialog',
  templateUrl: './hoc-report-dialog.component.html',
  styleUrls: ['./hoc-report-dialog.component.css']
})
export class HocReportDialogComponent {

  constructor(public dialogRef: MatDialogRef<HocReportDialogComponent>) {}

  reportsTableData = [
    { column1: 'Row 1 - Column 1', column2: 'Row 1 - Column 2', column3: 'Row 1 - Column 3', column4: 'Row 1 - Column 4', column5: 'Row 1 - Column 5' },
    { column1: 'Row 2 - Column 1', column2: 'Row 2 - Column 2', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5' },
    { column1: 'Row 2 - Column 1', column2: 'Row 2 - Column 2', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5' },
    // Add more rows as needed
  ];

  closeDialog(): void {
    this.dialogRef.close();
  }

}
