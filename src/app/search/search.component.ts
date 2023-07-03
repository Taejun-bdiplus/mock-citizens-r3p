

import { Component , HostListener, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignDialogComponent } from '../assign-dialog/assign-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
interface tableData {
  loanNumber: string;
  borrowerName: string;
  investor: string;
  status: string;
  context: string;
  disposalDescription: string;
  recievedDate: string;
  dueDate: string;
  auditor: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  tableData = [
    {
      loanNumber: '1',
      borrowerName: 'Paul',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '2',
      borrowerName: 'Karen',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '3',
      borrowerName: 'Mary',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '4',
      borrowerName: 'Taejun',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '5',
      borrowerName: 'Mohit',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '6',
      borrowerName: 'Doe',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '7',
      borrowerName: 'Ron',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '8',
      borrowerName: 'Finny',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '9',
      borrowerName: 'John Doe',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
    {
      loanNumber: '10',
      borrowerName: 'John ',
      investor: 'FNMA',
      status: 'Pending',
      context: 'MI QA Audit',
      recievedDate: '1/1/22',
      disposalDescription: 'Pending',
      dueDate:'3/1/22',
      auditor:'Earnest, Jim'
    },
  ];
  dataSource = new MatTableDataSource(this.tableData);
  dataSourceWithPageSize = new MatTableDataSource(this.tableData);


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
  advancedSearchTerm: string = '';
  ngOnInit() {
    this.filteredRows = this.tableData;
  }

  filterTable() {
    if (this.searchTerm.trim() !== '') {
      this.filteredRows = this.tableData.filter(row =>
        row.loanNumber.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredRows = this.tableData;
    }
  }
  advancedFilterTable() {
    if (this.advancedSearchTerm.trim() !== '') {
      this.filteredRows = this.tableData.filter(row =>
        row.borrowerName.toLowerCase().includes(this.advancedSearchTerm.toLowerCase()
        )
      );
      
    } else {
      this.filteredRows = this.tableData;
    }
  }
  constructor(private dialog: MatDialog) {}
  @ViewChild('paginator') paginator: any = MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: any = MatPaginator;

  pageSize = 10; 
  pageEvent: any = PageEvent;
  show = true;

  pageSizes = [3, 5, 7];
  openAssignDialog() {
    this.dialog.open(AssignDialogComponent, {
      width: '400px',
      panelClass: 'assign-dialog-container',
      autoFocus: false
    });
  }
  onTableSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.pageSizes = event.target.value;
 //   this.fetchPosts();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }
}
