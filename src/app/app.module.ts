import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Import Material UI modules
import { MatDialogModule } from '@angular/material/dialog';
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
import { AppSidebarComponent } from './pages/default-layout/app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './pages/default-layout/app-header/app-header.component';
import { DashboardComponent } from './pages/default-layout/main-body/dashboard/dashboard.component';
import { SearchComponent } from './pages/default-layout/main-body/search/search.component';
import { AnalystsComponent } from './pages/default-layout/main-body/analysts/analysts.component';
import { ReportsComponent } from './pages/default-layout/main-body/reports/reports.component';
import { AssignDialogComponent } from './dialogs/assign-dialog/assign-dialog.component';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomPaginator } from './pages/default-layout/main-body/search/CustomPaginator';
import { CommonModule } from '@angular/common';
import { TableOverviewExample } from './pages/default-layout/main-body/search/test/table-overview-example/table-overview-example';
import { MatMenuModule } from '@angular/material/menu';
import { ReminderComponent } from './pages/default-layout/app-header/reminder/reminder.component';
import { NotificationComponent } from './pages/default-layout/app-header/notification/notification.component';

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
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    
    ReminderComponent,
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
    MatPaginatorModule,
    MatFormFieldModule,
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