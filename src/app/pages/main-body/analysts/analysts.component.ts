// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-analysts',
//   templateUrl: './analysts.component.html',
//   styleUrls: ['./analysts.component.css']
// })
// export class AnalystsComponent {

// }







import { Component , HostListener} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignDialogComponent } from '../../../dialogs/assign-dialog/assign-dialog.component';

interface tableData {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  isDeactivated: boolean;
}

@Component({
  selector: 'app-analysts',
  templateUrl: './analysts.component.html',
  styleUrls: ['./analysts.component.css']
})
export class AnalystsComponent {
  tableData = [
    { column1: 'John Doe', column2: 'Value 1', column3: 'Data 1', column4: 'Info 1', column5: 'Item 1',isDeactivated: false },
    { column1: 'David Doe', column2: 'Value 2', column3: 'Data 2', column4: 'Info 2', column5: 'Item 2',isDeactivated: false },
    { column1: 'Kevin Doe', column2: 'Value 3', column3: 'Data 3', column4: 'Info 3', column5: 'Item 3',isDeactivated: false },
    { column1: 'karan Doe', column2: 'Value 4', column3: 'Data 4', column4: 'Info 4', column5: 'Item 4',isDeactivated: false },
    { column1: 'Kamil Doe', column2: 'Value 5', column3: 'Data 5', column4: 'Info 5', column5: 'Item 5',isDeactivated: false },
    { column1: 'Sarah Doe', column2: 'Value 1', column3: 'Data 1', column4: 'Info 1', column5: 'Item 1',isDeactivated: false },
    { column1: 'Harry Doe', column2: 'Value 2', column3: 'Data 2', column4: 'Info 2', column5: 'Item 2',isDeactivated: false },
    { column1: 'Harman Doe', column2: 'Value 3', column3: 'Data 3', column4: 'Info 3', column5: 'Item 3',isDeactivated: false },
    { column1: 'Benjamin Doe', column2: 'Value 4', column3: 'Data 4', column4: 'Info 4', column5: 'Item 4',isDeactivated: false },
    { column1: 'Boro Doe', column2: 'Value 5', column3: 'Data 5', column4: 'Info 5', column5: 'Item 5',isDeactivated: false },
    { column1: 'Esmail Doe', column2: 'Value 4', column3: 'Data 4', column4: 'Info 4', column5: 'Item 4',isDeactivated: false },
    { column1: 'Boris Doe', column2: 'Value 5', column3: 'Data 5', column4: 'Info 5', column5: 'Item 5',isDeactivated: false },
    // Add more rows as needed
  ];



  showScrollTopBtn: boolean = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollTopBtn = window.pageYOffset > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  filteredRows: tableData[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.filteredRows = this.tableData;
  }

  filterTable() {
    if (this.searchTerm.trim() !== '') {
      this.filteredRows = this.tableData.filter(row =>
        row.column1.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredRows = this.tableData;
    }
  }
  constructor(private dialog: MatDialog) {}

  openAssignDialog(row: tableData): void {
    this.dialog.open(AssignDialogComponent, {
      width: '400px',
      panelClass: 'assign-dialog-container',
      autoFocus: false
    });
  }

  deactivateRow(rowIndex: number): void {
    this.tableData[rowIndex].isDeactivated = true;
  }

  

  activateRow(rowIndex: number): void {
    this.tableData[rowIndex].isDeactivated = false;
  }


}
