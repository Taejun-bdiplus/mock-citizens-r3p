import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainSidebarComponent } from './pages/main-layout/main-sidebar/main-sidebar.component';
import { MainHeaderComponent } from './pages/main-layout/main-header/main-header.component';
import { AnalystsComponent } from './pages/main-layout/main-body/analysts/analysts.component';
import { DashboardComponent } from './pages/main-layout/main-body/dashboard/dashboard.component';
import { ReportsComponent } from './pages/main-layout/main-body/reports/reports.component';
import { SearchComponent } from './pages/main-layout/main-body/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignDialogComponent } from '../app/dialogs/assign-dialog/assign-dialog.component';
import { TableOverviewExample } from '../app/pages/main-layout/main-body/search/test/table-overview-example/table-overview-example';

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
import { AddManuallyDialogComponent } from './add-manually-dialog/add-manually-dialog.component';
import { UploadDialogComponent } from './upload-dialog/upload-dialog.component'
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
    UploadDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReminderComponent,
    NotificationComponent,

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
  providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlCro}],
  bootstrap: [AppComponent]
})
export class AppModule { }
