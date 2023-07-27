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
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    {
      name: 'John',
      number: '12',
      context: 'MI QA Audit',
      dueDate: new Date('2023-07-31'),
    },
    
    // Add more dummy data here (total 9 rows)
  ];
}
