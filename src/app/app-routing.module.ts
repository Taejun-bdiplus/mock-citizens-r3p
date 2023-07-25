import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { DashboardComponent } from './pages/main-layout/main-body/dashboard/dashboard.component';
import { AnalystsComponent } from './pages/main-layout/main-body/analysts/analysts.component';
import { SearchComponent } from './pages/main-layout/main-body/search/search.component';
import { ReportsComponent } from './pages/main-layout/main-body/reports/reports.component';
import { LoanDetailComponent } from './pages/main-layout/main-body/loan-detail/loan-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'search', component: SearchComponent},
      {path: 'analysts', component: AnalystsComponent},
      {path: 'reports', component: ReportsComponent},
      { path: 'loanDetail', component: LoanDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
