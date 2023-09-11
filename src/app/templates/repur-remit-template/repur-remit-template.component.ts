import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-repur-remit-template',
  templateUrl: './repur-remit-template.component.html',
  styleUrls: ['./repur-remit-template.component.css']
})
export class RepurRemitTemplateComponent {


  constructor(public dialogRef: MatDialogRef<RepurRemitTemplateComponent>) {}

  text: string = "check here";

  closeDialog(): void {
    this.dialogRef.close();
  }

}
