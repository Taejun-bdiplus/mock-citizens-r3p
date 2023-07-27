import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-view-table',
  templateUrl: './recent-view-table.component.html',
  styleUrls: ['./recent-view-table.component.css']
})
export class RecentViewTableComponent {
  displayedColumns: string[] = ['loanNumber', 'borrowerName', 'status', 'context', 'dueDate', 'auditor'];

  loans = [
    {
      loanNumber: '1234567890',
      borrowerName: 'John Doe',
      status: 'Approved',
      context: 'MI QA',
      dueDate: new Date('2023-07-31'),
      auditor: 'Alice'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '1234567890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'MI QA',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    // Add more dummy data here (total 8 rows)
  ];
}
