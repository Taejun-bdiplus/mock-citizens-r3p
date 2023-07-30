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
