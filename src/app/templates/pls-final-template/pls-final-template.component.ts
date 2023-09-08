import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pls-final-template',
  templateUrl: './pls-final-template.component.html',
  styleUrls: ['./pls-final-template.component.css']
})
export class PlsFinalTemplateComponent {

  constructor(public dialogRef: MatDialogRef<PlsFinalTemplateComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

  tableData = [
    { column1: 'row-1 column-1', column2: 'row-1 column-2', column3: '', rowspan: 1 },
    { column1: 'row-2 column-1', column2: 'row-2 column-2', column3: 'Combined Text Box', rowspan: 3 },
    { column1: 'row-3 column-1', column2: 'row-3 column-2', column3: '', rowspan: 1 },
    { column1: 'row-4 column-1', column2: 'row-4 column-2', column3: 'Another Combined Text Box', rowspan: 2 },
    { column1: 'row-5 column-1', column2: 'row-5 column-2', column3: '', rowspan: 1 },
    { column1: 'row-6 column-1', column2: 'row-6 column-2', column3: '', rowspan: 1 },
    { column1: 'row-7 column-1', column2: 'row-7 column-2', column3: '', rowspan: 1 },
  ];

}
