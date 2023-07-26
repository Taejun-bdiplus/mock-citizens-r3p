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
      loanNumber: '12345',
      borrowerName: 'John Doe',
      status: 'Approved',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
      auditor: 'Alice'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    {
      loanNumber: '67890',
      borrowerName: 'Jane Smith',
      status: 'Pending',
      context: 'Car Loan',
      dueDate: new Date('2023-08-15'),
      auditor: 'Bob'
    },
    // Add more dummy data here (total 8 rows)
  ];
}
