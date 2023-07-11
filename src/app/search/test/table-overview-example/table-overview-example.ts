import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatTableDataSourcePageEvent } from '@angular/material/table';
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
    city:'',
    state:'',
    zip: '',
  };
  show = true;

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageSize = 50; 
  currentTerm: string = '';
  normalOrAdvanced: string = 'normal';

  searchTerms: string[] = [];
  showSearchTerms: boolean = false;
  advancedSearchTerm: string = '';
  
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
    if(this.normalOrAdvanced == 'normal'){
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.loanNumber.toLowerCase().includes(filter) 
      };
    }
    else if(this.normalOrAdvanced == 'advanced'){
      this.dataSource.filterPredicate = function(data, filterValues: string): boolean {
        return data.status.toLowerCase().includes(filterValues) || data.status.toLowerCase().includes(filterValues);
      };
    }
    
  }
  ngAfterContentChecked(){
   console.log("weeeee" + this.dataSource.paginator?.pageIndex)
    var pages = this.dataSource.filteredData.length / this.pageSize;
    console.log(this.filterValues)
  }
   
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource._filterData);
  }
  clearAdvancedSearch(){
    this.filterValues =  {
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
    
  }
  
  setInputValue(event: Event): void {
    console.log('setInputValue', (event.target as HTMLTextAreaElement).value);
    this.normalSearchOnClick((event.target as HTMLTextAreaElement).value)
  }
  changeIndex(event: Event): void {
  
  }
  normalSearchOnClick(str: string){
    console.log("clicked")
    this.applyAdvancedFilter(str)

  }
  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    

    
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.filter);

    

   
  }
  applyAdvancedFilter(advancedSearchTerm: string){
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
    context: "hi",
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