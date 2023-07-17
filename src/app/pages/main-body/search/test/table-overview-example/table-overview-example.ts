import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

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
  filterValues = {
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
    borrowerLastName: '',
    borrowerLastFourSSN: '',
    hashtag: '',
    miCertificateNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  };
  show = true;
    pageIndex: number = 0;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageSize = 50;
  currentTerm: string = '';
  normalOrAdvanced: string = 'advanced';

  searchTerms: string[] = [];
  showSearchTerms: boolean = false;
  advancedSearchTerm: string = '';
  loans: UserData[] = [
    {

      loanNumber: '2133422342',
      borrowerName: 'name',
      investor: "FNMA",
      status: "pending",
      context: "hi",
      disposalDescription: 'pending',
      recievedDate: '1/1/22',
      dueDate: '3/1/22',
      auditor: 'Earnst, Jim',
      famcLoanNumber: '',
      cfgLoanNumber: '',
      servicerLoanNumber: '',
      investorLoanNumber: '',
      caseNumber: '',
      borrowerFirstName: '',
      borrowerLastName: '',
      borrowerLastFourSSN: '',
      hashtag: '',
      miCertificateNumber: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    }

  ]
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
    console.log(this.paginator._inil.P);

    if (this.show == false) {
      this.dataSource.filterPredicate = function (data, filter: string): boolean {
        return data.loanNumber.toLowerCase().includes(filter)
      };
    }
    else if (this.show == true) {
      this.applyFilter
    }
console.log(this.dataSource);
  }
  ngAfterContentChecked() {
    this.pageIndex = this.dataSource.paginator?.pageIndex as number;
    
    var pages = this.dataSource.filteredData.length / this.pageSize;
   //  console.log(this.advancedFilterValues)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //  console.log(this.dataSource._filterData);
  }
  clearAdvancedSearch() {
    this.advancedFilterValues = {
      famcLoanNumber: '',
      cfgLoanNumber: '',
      servicerLoanNumber: '',
      investorLoanNumber: '',
      caseNumber: '',
      borrowerFirstName: '',
      borrowerLastName: '',
      borrowerLastFourSSN: '',
      hashtag: '',
      miCertificateNumber: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    };

  }
  getFilterPredicate() {
    return (row: UserData, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const departureStation = filterArray[1];
      const arrivalStation = filterArray[2];

      const matchFilter = [];

      // Fetch data from row
      const columnFamcLoanNumber = row.famcLoanNumber;
      const columnCfgLoanNumber = row.cfgLoanNumber;
      const columnServicerLoanNumber = row.servicerLoanNumber;
      const columnInvestorLoanNumber = row.investorLoanNumber;
      const columnCaseNumber = row.caseNumber;
      const columnBorrowerFirstName = row.borrowerFirstName;
      const columnBorrowerLastName = row.borrowerLastName;
      const columnborrowerLastFourSSN = row.borrowerLastFourSSN;
      const columnHashtag = row.hashtag;
      const columnMiCertificateNumber = row.miCertificateNumber;
      const columnAddress = row.address;
      const columnCity = row.city;
      const columnState = row.state
      const columnZip = row.zip;

      // verify fetching data by our searching values
      const famcLoanNumberFilter = columnFamcLoanNumber.toLowerCase().includes(departureDate);
      const cfgLoanNumberFilter = columnCfgLoanNumber.toLowerCase().includes(departureStation);
      const servicerLoanNumberFilter = columnServicerLoanNumber.toLowerCase().includes(arrivalStation);
      const investorLoanNumberFilter = columnInvestorLoanNumber.toLowerCase().includes(departureDate);
      const caseNumberFilter = columnCaseNumber.toLowerCase().includes(departureDate);

      const borrowerFirstNameFilter = columnBorrowerFirstName.toLowerCase().includes(departureDate);

      const borrowerLastNameFilter = columnBorrowerLastName.toLowerCase().includes(departureStation);
      const borrowerLastFourSSNFilter = columnborrowerLastFourSSN.toLowerCase().includes(arrivalStation);
      const hashtagFilter = columnHashtag.toLowerCase().includes(departureDate);
      const miCertificateNumberFilter = columnMiCertificateNumber.toLowerCase().includes(departureStation);
      const addressFilter = columnAddress.toLowerCase().includes(arrivalStation);
      const cityFilter = columnCity.toLowerCase().includes(departureDate);
      const stateFilter = columnState.toLowerCase().includes(departureStation);
      const zipFilter = columnZip.toLowerCase().includes(arrivalStation);

      // push boolean values into array
      matchFilter.push(famcLoanNumberFilter);
      matchFilter.push(cfgLoanNumberFilter);
      matchFilter.push(servicerLoanNumberFilter);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }
  setInputValue(event: Event): void {
    console.log('setInputValue', (event.target as HTMLTextAreaElement).value);
    this.normalSearchOnClick((event.target as HTMLTextAreaElement).value)
  }
  clickGo(event: Event): void {
    this.normalSearchOnClick((event.target as HTMLTextAreaElement).value)
  }
  advancedClickGo() {
    this.applyFilter;
  }
  changeIndex(event: Event): void {

  }
  normalSearchOnClick(str: string) {
    console.log("clicked")
    this.applyAdvancedFilter(str)

  }
  applyFilter() {
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.loanNumber.toLowerCase().includes(filter)
    };
   
  
    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.loanNumber.toLowerCase().includes(filter)
    };
    

  


    console.log(this.dataSource.filter);




  }
  applyAdvancedFilter(advancedSearchTerm: string) {

    this.dataSource.filterPredicate = function (data, filter: string): boolean {
      return data.loanNumber.toLowerCase().includes(filter)
    };
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
    auditor: 'Earnst, Jim',
    famcLoanNumber: '',
    cfgLoanNumber: '',
    servicerLoanNumber: '',
    investorLoanNumber: '',
    caseNumber: '',
    borrowerFirstName: '',
    borrowerLastName: '',
    borrowerLastFourSSN: '',
    hashtag: '',
    miCertificateNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
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
  famcLoanNumber: '',
  cfgLoanNumber: '',
  servicerLoanNumber: '',
  investorLoanNumber: '',
  caseNumber: '',
  borrowerFirstName: '',
  borrowerLastName: '',
  borrowerLastFourSSN: '',
  hashtag: '',
  miCertificateNumber: '',
  address: '',
  city: '',
  state: '',
  zip: '',
}



/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */