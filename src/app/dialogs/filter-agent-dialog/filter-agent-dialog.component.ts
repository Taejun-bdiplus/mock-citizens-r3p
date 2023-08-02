import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-agent-dialog',
  templateUrl: './filter-agent-dialog.component.html',
  styleUrls: ['./filter-agent-dialog.component.css']
})
export class FilterAgentDialogComponent {
  names: string[] = ['John Doe', 'John Doe', 'John Doe', 'John Doe', 'John Doe', 'John Doe', 'John Doe'];

  @Output() nameSelected = new EventEmitter<string>();

  handleButtonClick(name: string) {
    this.nameSelected.emit(name);
  }
}
