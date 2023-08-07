import { Component } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterAgentDialogComponent } from 'src/app/dialogs/filter-agent-dialog/filter-agent-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
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

  showTable: boolean = false;

  selectedRole: string = ''; // Assuming selectedRole is of type string. You should set its value accordingly.
  nameSelectedValue: string = '';

  // Define a property to store the full button text
  filterButtonLabel: string = 'Filter By Agent';
  filterByAgentWithName: boolean = false;

  ngOnInit() {
    this.filterByAgentWithName = false;
  }
  constructor(private sharedService: SharedService, private dialog: MatDialog) {
    this.sharedService.selectedRole$.subscribe(selectedRole => {
      this.selectedRole = selectedRole;
    });

    this.sharedService.nameSelectedValue$.subscribe((nameSelectedValue) => {
      this.nameSelectedValue = nameSelectedValue;
      // Update the filterButtonLabel when nameSelectedValue changes
      this.updateFilterButtonLabel();
    });
  }

  selectedFilter: string = 'All Pending';
  // selectFilter(filter: string): void {
  //   this.selectedFilter = filter;

  //   if (filter === 'Filter By Agent') {
  //     this.showTable = false;
  //     const dialogRef = this.dialog.open(FilterAgentDialogComponent, {
  //       // Configure dialog options here
  //     });
  //   }

  // }
  selectFilter(filter: string): void {
    this.selectedFilter = filter;
    this.filterByAgentWithName = false;
    if (filter === 'Filter By Agent') {
      this.showTable = false;
      const dialogRef = this.dialog.open(FilterAgentDialogComponent, {
        // Configure dialog options here
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result && result.nameSelected) {
          const nameSelectedValue = result.nameSelected;
          // Do something with the nameSelectedValue
          console.log('Name selected: ', nameSelectedValue);
          this.nameSelectedValue = nameSelectedValue;
          this.updateFilterButtonLabel();
        }
      });
    }
  }
   // Function to update the filterButtonLabel with nameSelectedValue
   private updateFilterButtonLabel(): void {
    this.filterButtonLabel = 'Filter By Agent' + (this.nameSelectedValue ? ': ' + this.nameSelectedValue : '');
    this.filterByAgentWithName = true;
  }
}
