import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignDialogComponent } from '../assign-dialog/assign-dialog.component'; // Replace with your actual dialog component


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  constructor(private dialog: MatDialog) {}

  items: string[] = ['Ad Hoc Report', 'Canned Report', 'FMLA Report', 'Report', 'Report'];

  handleButtonClick(item: string) {
    if (item === this.items[0]) { // Check if it is the first row
      const dialogRef = this.dialog.open(AssignDialogComponent, {
        // Configure dialog options here
      });
  
      // Subscribe to dialog close event if needed
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close event if needed
      });
    }
  }


  // cards: string[] = [
  //   '0',
  //   '0',
  //   '20',
  //   '30',
  //   '12',
  //   '28',
  //   '10',
  //   '0'
  // ];

  cards: { mainHeading: string, secondHeading: string }[] = [
    { mainHeading: '0', secondHeading: 'Pending MI FERs' },
    { mainHeading: '0', secondHeading: 'Pending MI QAs' },
    { mainHeading: '20', secondHeading: 'Pending FERs' },
    { mainHeading: '30', secondHeading: 'Pending QAs' },
    { mainHeading: '12', secondHeading: 'Pending Repurchases' },
    { mainHeading: '28', secondHeading: 'Pending Repurchases' },
    { mainHeading: '10', secondHeading: 'Pending Repurchases' },
    { mainHeading: '0', secondHeading: 'Pending MI QAs' }
  ];

  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('button is clicked but it is not going up');
  }
  
  

}
