import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reminder',
    templateUrl: './reminder.component.html',
    styleUrls: ['./reminder.component.css'],
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, MatIconModule, CommonModule],
})
export class ReminderComponent {
    hasReminder: boolean = true;

    constructor(private router: Router) {}

    navigateToOtherComponent() {
    // Navigate to the desired component using the router.navigate() method
    this.router.navigate(['/loanDetail']);
    }

    imageClicked() {
        this.hasReminder = false;
    }
}