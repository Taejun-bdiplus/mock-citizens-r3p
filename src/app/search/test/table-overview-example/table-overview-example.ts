import {Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
  show = true;
  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;
  pageSize = 10; 
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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  setInputValue(event: Event): void {
    console.log('setInputValue', (event.target as HTMLTextAreaElement).value);
    this.applyFilter((event.target as HTMLTextAreaElement).value)
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
   
    this.dataSource.filter = filterValue;
  }
  applyAdvancedFilter(advancedSearchTerm: string){
    advancedSearchTerm = advancedSearchTerm.trim(); // Remove whitespace
    advancedSearchTerm = advancedSearchTerm.toLowerCase(); // Datasource defaults to lowercase matches
   
    this.dataSource.filter = advancedSearchTerm;
  }
}

/** Builds and returns a new User. */
function createNewUser(loanNumber: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    loanNumber: loanNumber.toString(),
    borrowerName: name,
    investor: Math.round(Math.random() * 100).toString(),
    status: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    context: "hi",
    disposalDescription: 'pending',
    recievedDate: '1/1/22',
    dueDate: '3/1/22',
    auditor: 'Earnst, Jim'
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
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