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


  

  // tableData = [
  //   { column1: 'John Doe', column2: 'Value 1', column3: 'Data 1', selected: false },
  //   { column1: 'David Doe', column2: 'Value 2', column3: 'Data 2', selected: false },
  //   { column1: 'Kevin Adams', column2: 'Value 3', column3: 'Data 3', selected: false },
  //   { column1: 'Sarah Smith', column2: 'Value 4', column3: 'Data 4', selected: false },
  // ];
  @Input() tableData: any[] = [];
  


  selectedRow: any = null; // Track the selected row

  @Output() analystAssigned = new EventEmitter<string>();

  assignAnalyst() {
    if (this.selectedRow) {
      this.analystAssigned.emit(this.selectedRow.column1); // Emit the analyst's name
      this.closeDialog();
    }
  }

  onCheckboxChange(row: any) {
    this.selectedRow = row; // Update selectedRow when a checkbox is clicked
  }

  

  

  

  

}
