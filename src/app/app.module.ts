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
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { AnalystsComponent } from './analysts/analysts.component';
import { ReportsComponent } from './reports/reports.component';
import { AssignDialogComponent } from './assign-dialog/assign-dialog.component';
import { MatPaginator, MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CustomPaginator } from './search/CustomPaginator';
import { CommonModule } from '@angular/common';
import { TableOverviewExample } from './search/test/table-overview-example/table-overview-example';
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