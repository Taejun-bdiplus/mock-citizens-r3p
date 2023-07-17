import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './pages/default-layout/default-layout.component';
import { DashboardComponent } from './pages/default-layout/main-body/dashboard/dashboard.component';
import { SearchComponent } from './pages/default-layout/main-body/search/search.component';
import { AnalystsComponent } from './pages/default-layout/main-body/analysts/analysts.component';
import { ReportsComponent } from './pages/default-layout/main-body/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'search', component: SearchComponent },
      { path: 'analysts', component: AnalystsComponent },
      { path: 'reports', component: ReportsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
