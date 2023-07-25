import { Component } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule],
})
export class NotificationComponent {
  hasNotification: boolean = true;

  constructor(private router: Router) { }

  navigateToOtherComponent() {
      // Navigate to the desired component using the router.navigate() method
      console.log("navigateToOtherComponent", this.router);
      this.router.navigate(['/loanDetail']);
  }

  imageClicked() {
    this.hasNotification = false;
  }
  
}