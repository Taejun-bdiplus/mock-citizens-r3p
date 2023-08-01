import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared/shared.service'; // Import the service


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainSidebarComponent } from './pages/main-layout/main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './pages/main-layout/main-header/main-header.component';
import { AnalystsComponent } from './pages/main-layout/main-body/analysts/analysts.component';
import { DashboardComponent } from './pages/main-layout/main-body/dashboard/dashboard.component';
import { ReportsComponent } from './pages/main-layout/main-body/reports/reports.component';
import { SearchComponent } from './pages/main-layout/main-body/search/search.component';
import { AssignDialogComponent } from '../app/dialogs/assign-dialog/assign-dialog.component';
import { AddManuallyDialogComponent } from './dialogs/add-manually-dialog/add-manually-dialog.component';
import { UploadDialogComponent } from './dialogs/upload-dialog/upload-dialog.component';
import { OverallOutstandingPipelineComponent } from './pages/main-layout/main-body/dashboard/overall-outstanding-pipeline/overall-outstanding-pipeline.component';
import { RecentViewTableComponent } from './pages/main-layout/main-body/dashboard/recent-view-table/recent-view-table.component';
import { HocReportDialogComponent } from './dialogs/hoc-report-dialog/hoc-report-dialog.component';
import { CannedReportDialogComponent } from './dialogs/canned-report-dialog/canned-report-dialog.component';
import { AssignedLoansBoxComponent } from './pages/main-layout/main-body/dashboard/assigned-loans-box/assigned-loans-box.component';
import { RecentActivityBoxComponent } from './pages/main-layout/main-body/dashboard/recent-activity-box/recent-activity-box.component';

// Import Material UI Modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReminderComponent } from './pages/main-layout/main-header/reminder/reminder.component';
import { NotificationComponent } from './pages/main-layout/main-header/notification/notification.component';
import { LoanDetailComponent } from './pages/main-layout/main-body/loan-detail/loan-detail.component';


//Providers 
import { MatPaginatorIntlCro } from "./pages/main-layout/main-body/search/test/table-overview-example/customPaginator";
import { TableOverviewExample } from '../app/pages/main-layout/main-body/search/test/table-overview-example/table-overview-example';
import { AssignedLoansTableComponent } from './pages/main-layout/main-body/dashboard/assigned-loans-box/assigned-loans-table/assigned-loans-table.component';
import { RecentActivityListComponent } from './pages/main-layout/main-body/dashboard/recent-activity-box/recent-activity-list/recent-activity-list.component';
import { RecentActivityListItemComponent } from './pages/main-layout/main-body/dashboard/recent-activity-box/recent-activity-list/recent-activity-list-item/recent-activity-list-item.component';
import { ExportReportDialogComponent } from './dialogs/export-report-dialog/export-report-dialog.component';
import { UploadButtonHeaderComponent } from './dialogs/upload-button-header/upload-button-header.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainSidebarComponent,
    MainHeaderComponent,
    AnalystsComponent,
    DashboardComponent,
    ReportsComponent,
    SearchComponent,
    AssignDialogComponent,
    TableOverviewExample,
    LoanDetailComponent,
    AddManuallyDialogComponent,
    UploadDialogComponent,
    OverallOutstandingPipelineComponent,
    RecentViewTableComponent,
    HocReportDialogComponent,
    CannedReportDialogComponent,
    AssignedLoansBoxComponent,
    RecentActivityBoxComponent,
    AssignedLoansTableComponent,
    RecentActivityListComponent,
    RecentActivityListItemComponent,
    ExportReportDialogComponent,
    UploadButtonHeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReminderComponent,
    NotificationComponent,
    NgChartsModule,
    MatIconModule,

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
    MatSortModule,
    MatSelectModule,
    MatPaginatorModule,
    MatChipsModule,
    MatFormFieldModule,
  ],
  providers: [SharedService, { provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
  bootstrap: [AppComponent]
})
export class AppModule { }
