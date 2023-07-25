import { Component, ViewChild, inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatChipInputEvent, MatChipEditedEvent, MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableDataSourcePageEvent } from '@angular/material/table';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { NgFor } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';
export interface SearchTerms {
  name: string;
}
/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample {
  displayedColumns = ['loanNumber', 'borrowerName', 'investor', 'status', 'context', 'disposalDescription', 'recievedDate', 'dueDate', 'auditor'];
  dataSource: MatTableDataSource<UserData>;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  loanFilter: string = ''
  filterValues = <UserData>{
    loanNumber: '',
    borrowerName: '',
    investor: '',
    status: '',
    context: '',
    disposalDescription: '',
    recievedDate: '',
    dueDate: '',
    auditor: ''
  };
  advancedFilterValues = {
    famcLoanNumber: '',
    cfgLoanNumber: '',
    servicerLoanNumber: '',
    investorLoanNumber: '',
    caseNumber: '',
    borrowerFirstName: '',
    borrowerLastFourSSN: '',
    hashtag: '',
    miCertificateNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  };
  show = true;

  announcer = inject(LiveAnnouncer);

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageSize = 10;
  searchTermStringArr: string[] = [];
  currentTerm: string = '';
  normalOrAdvanced: string = 'normal';
  buttons: Array<number> = [1,];
  searchTerms: SearchTerms[] = [

  ];
  numOfElements: number = 0;
  display: boolean = true;
  showSearchTerms: boolean = false;
  advancedSearchTerm: string = '';
  numOfPages: any = 0;
  pageIndex = 0;
  userReset: UserData[] = [];

  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */

  ngOnInit() {

    this.dataSource.data.map((x) => {
      this.userReset.push(x);
    });
    console.log(this.dataSource)

  }
  ngAfterContentChecked() {
    var pages = this.dataSource.filteredData.length / this.pageSize;

    console.log(this.dataSource.paginator?.pageIndex)

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    var pages = this.dataSource.filteredData.length / this.pageSize;

    //   console.log(this.numOfPages)
    this.numOfPages = this.paginator.pages

    for (let i = 1; i < pages; i++) {
      this.buttons.push(i);
    }
    console.log(this.dataSource);

  }
  clearAdvancedSearch() {
    this.searchTerms = []
    this.resetTable();

  }
  indexOnPage(pageNumber: number) {

    const currentPage = pageNumber;
    console.log(currentPage)
    this.pageIndex = currentPage;
    this.paginator.pageIndex = pageNumber;
    this.paginator._updatePaginator = this.pageSize * this.pageIndex;
    this.dataSource.paginator = this.paginator;
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    console.log(this.searchTerms)
    console.log(value);
    // Add our fruit
    if ((value || '').trim()) {
      this.searchTerms.push({ name: value.trim() });

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(searchTerm: SearchTerms): void {
    const index = this.searchTerms.indexOf(searchTerm);
    console.log(this.searchTerms)
    if (index >= 0) {
      this.searchTerms.splice(index, 1);
      this.resetTable();
      this.specialFilter();

    }
    this.specialFilter();
  }

  setPageValue(event: Event): void { }
  setInputValue(event: Event): void {
    console.log('setInputValue', (event.target as HTMLTextAreaElement).value);
    this.normalSearchOnClick((event.target as HTMLTextAreaElement).value)
  }
  specialFilter() {
    var tempDataSource = this.dataSource;
    this.searchTerms.map((item) => {
      var localFilterValue = item.name.trim(); // Remove whitespace
      localFilterValue = localFilterValue.toLowerCase(); // Datasource defaults to lowercase matches
      this.dataSource.filter = localFilterValue;
    })
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
    this.dataSource._pageData;
    var pages = this.dataSource.filteredData.length / this.pageSize;
    this.numOfElements = this.dataSource.filteredData.length;
    if (this.numOfElements < this.pageSize) {
      this.display = false;
    }
    else if (this.numOfElements >= this.pageSize) {
      this.display = true;
      console.log(this.numOfElements)
      this.buttons = []
      for (let i = 0; i < pages; i++) {
        this.buttons.push(i);
      }
    }
  }

  normalSearchOnClick(str: string) {
    console.log("clicked")
    this.applyFilter(str)

  }

  adjustPageSize(event: Event) {
    console.log((event.target as HTMLTextAreaElement).value)
    console.log(this.pageSize)
    this.paginator.pageSize = this.pageSize;
    this.dataSource.paginator = this.paginator;
    var pages = this.dataSource.filteredData.length / this.pageSize;
    this.buttons = []
    for (let i = 0; i < pages; i++) {
      this.buttons.push(i);
    }
    console.log(this.numOfElements);
    this.indexOnPage
  }
  nextButtonClick() {
    if(this.pageIndex === this.buttons.length - 1){
      this.indexOnPage(this.pageIndex)
    }
    else{


    this.indexOnPage(this.pageIndex + 1)

  }}

  backButtonClick() {
    if(this.pageIndex === 0){
      this.indexOnPage(this.pageIndex)
    }
    else{


    
    this.indexOnPage(this.pageIndex - 1)
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.loanNumber.toLowerCase().includes(filter)
    };

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filter);
  }
  resetTable() {
    this.dataSource.filter = "";
  }
  applyAdvancedFilter(advancedSearchTerm: string) {


    advancedSearchTerm = advancedSearchTerm.trim(); // Remove whitespace
    advancedSearchTerm = advancedSearchTerm.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = advancedSearchTerm;
    console.log(this.dataSource.filter);
  }


}

/** Builds and returns a new User. */
function createNewUser(loanNumber: number): UserData {
  const randomLoanNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    loanNumber: randomLoanNumber.toString(),
    borrowerName: name,
    investor: "FNMA",
    status: "pending",
    context: "MI QA Audit",
    disposalDescription: 'pending',
    recievedDate: '1/1/22',
    dueDate: '3/1/22',
    auditor: 'Earnst, Jim'
  };
}


/** Constants used to fill up our data base. */

const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
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



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */