import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
})
export class MainSidebarComponent {
  dashboardFocused: boolean = false;

  showRoles = false; // Add a flag to control the display of roles
  roles: string[] = ['Manager', 'Analyst', 'Senior Analyst'];
  selectedRole: string = 'Manager';

  // Function to toggle the display of roles
  toggleRoles() {
    this.showRoles = !this.showRoles;
  }

  // Function to set the selected role when clicked
  selectRole(role: string) {
    this.selectedRole = role;
    this.showRoles = false;
  }

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    const currentUrl: string = this.location.path();

    if (currentUrl.includes('dashboard')) {
      this.dashboardFocused = true;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const currentUrl = event.url;
        const isDashboardUrl = currentUrl.includes('dashboard');
        if (isDashboardUrl) {
          this.dashboardFocused = true;
        } else {
          this.dashboardFocused = false;
        }
      }
    });
  }
}
