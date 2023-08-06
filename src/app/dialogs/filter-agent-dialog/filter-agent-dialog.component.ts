import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SharedService } from '../../../app/shared/shared.service';

@Component({
  selector: 'app-filter-agent-dialog',
  templateUrl: './filter-agent-dialog.component.html',
  styleUrls: ['./filter-agent-dialog.component.css'],
})
export class FilterAgentDialogComponent {
  names: string[] = [
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
    'John Doe',
  ];

  constructor(
    private dialogRef: MatDialogRef<FilterAgentDialogComponent>,
    private SharedService: SharedService
  ) {}

  selectName(name: string): void {
    // Here, you can perform any additional logic or validations if needed
    const result = { nameSelected: name };
    this.dialogRef.close(result); // Pass the result back to the parent component when the dialog is closed

    this.SharedService.setSelectedRole(name);
  }
}
