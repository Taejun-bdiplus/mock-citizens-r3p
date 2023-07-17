import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
// Import Material UI modules

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './pages/default-layout/default-layout.component';
import { AppSidebarComponent } from './pages/app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './pages/app-header/app-header.component';
import { DashboardComponent } from './pages/main-body/dashboard/dashboard.component';
import { SearchComponent } from './pages/main-body/search/search.component';
import { AnalystsComponent } from './pages/main-body/analysts/analysts.component';
import { ReportsComponent } from './pages/main-body/reports/reports.component';
import { AssignDialogComponent } from './dialogs/assign-dialog/assign-dialog.component';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomPaginator } from './pages/main-body/search/CustomPaginator';
import { CommonModule } from '@angular/common';
import { TableOverviewExample } from './pages/main-body/search/test/table-overview-example/table-overview-example';
import { MatMenuModule } from '@angular/material/menu';
import { ReminderComponent } from './reminder/reminder.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TableOverviewExample,
    DefaultLayoutComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    DashboardComponent,
    SearchComponent,
    AnalystsComponent,
    ReportsComponent,
    AssignDialogComponent,
    ReminderComponent,
    NotificationComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    // Add Material UI modules to the imports array
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    
   MatSortModule,
   MatSelectModule
    
  ],
  
 
  providers: [ {
    provide: MatPaginatorIntl,
    useClass: CustomPaginator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }