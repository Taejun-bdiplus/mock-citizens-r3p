import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule],
})
export class ReminderComponent {
    constructor(private router: Router) { }

    navigateToOtherComponent() {
        // Navigate to the desired component using the router.navigate() method
        console.log("navigateToOtherComponent", this.router);
        this.router.navigate(['/loanDetail']);
      }
      
}
