import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigned-loans-box',
  templateUrl: './assigned-loans-box.component.html',
  styleUrls: ['./assigned-loans-box.component.css']
})
export class AssignedLoansBoxComponent {
  constructor(private router: Router) { }

  goToAnalystsComponent() {
    // Replace 'analysts' with the actual path of your analysts component in the routing module
    this.router.navigate(['/analysts']);
  }
}
