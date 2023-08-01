import { Component } from '@angular/core';
import { SharedService } from '../../../../shared/shared.service';

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

  constructor(private sharedService: SharedService) {
    this.sharedService.selectedRole$.subscribe(selectedRole => {
      this.selectedRole = selectedRole;
    });
  }
}
