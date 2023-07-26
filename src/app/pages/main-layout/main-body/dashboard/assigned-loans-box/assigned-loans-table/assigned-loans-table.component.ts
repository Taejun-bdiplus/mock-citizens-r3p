import { Component } from '@angular/core';

@Component({
  selector: 'app-assigned-loans-table',
  templateUrl: './assigned-loans-table.component.html',
  styleUrls: ['./assigned-loans-table.component.css']
})
export class AssignedLoansTableComponent {
  displayedColumns: string[] = ['name', 'number', 'context', 'dueDate'];

  loans = [
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John Doe',
      number: '12345566',
      context: 'Home Loan',
      dueDate: new Date('2023-07-31'),
    },
    
    // Add more dummy data here (total 9 rows)
  ];
}
