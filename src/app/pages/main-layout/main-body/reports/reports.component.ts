import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AssignDialogComponent } from '../../../../dialogs/assign-dialog/assign-dialog.component'; // Replace with your actual dialog component
import { HocReportDialogComponent } from 'src/app/dialogs/hoc-report-dialog/hoc-report-dialog.component';
import { CannedReportDialogComponent } from 'src/app/dialogs/canned-report-dialog/canned-report-dialog.component';
import { ExportReportDialogComponent } from 'src/app/dialogs/export-report-dialog/export-report-dialog.component';
import { LrstemplateComponent } from 'src/app/templates/lrstemplate/lrstemplate.component';
import { PlsFinalTemplateComponent } from 'src/app/templates/pls-final-template/pls-final-template.component';
import { RepurRemitTemplateComponent } from 'src/app/templates/repur-remit-template/repur-remit-template.component';
import { LenderAppraisalComponent } from 'src/app/templates/lender-appraisal/lender-appraisal.component';
import { LenderMiRescissionComponent } from 'src/app/templates/lender-mi-rescission/lender-mi-rescission.component';
import { LenderQcFfrMissingComponent } from 'src/app/templates/lender-qc-ffr-missing/lender-qc-ffr-missing.component';
import { LenderRepurchaseDemandNoticeComponent } from 'src/app/templates/lender-repurchase-demand-notice/lender-repurchase-demand-notice.component';
import { LenderRiskAlternativeComponent } from 'src/app/templates/lender-risk-alternative/lender-risk-alternative.component';
import { OperationsQcFfrMissingComponent } from 'src/app/templates/operations-qc-ffr-missing/operations-qc-ffr-missing.component';
import { OperationsRepurchaseDemandComponent } from 'src/app/templates/operations-repurchase-demand/operations-repurchase-demand.component';
import { MiQaUtrRescissionComponent } from 'src/app/templates/mi-qa-utr-rescission/mi-qa-utr-rescission.component';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {

  constructor(private dialog: MatDialog) {}

  items: string[] = ['Ad Hoc Report', 'Canned Report', 'FMLA Report', 'Report', 'Report'];

  handleButtonClick(item: string) {
    if (item === this.items[0]) { // Check if it is the first row
      const dialogRef = this.dialog.open(HocReportDialogComponent, {
        // Configure dialog options here
      });
  
      // Subscribe to dialog close event if needed
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close event if needed
      });
    }

    if (item === this.items[1]) { // Check if it is the first row
      const dialogRef = this.dialog.open(CannedReportDialogComponent, {
        // Configure dialog options here
      });
  
      // Subscribe to dialog close event if needed
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close event if needed
      });
    }

    if (item === this.items[4]) { // Check if it is the first row
      const dialogRef = this.dialog.open(MiQaUtrRescissionComponent, {
        // Configure dialog options here
      });
  
      // Subscribe to dialog close event if needed
      dialogRef.afterClosed().subscribe(result => {
        // Handle dialog close event if needed
      });
    }
  }

  handleButtonClickExport(){
    const dialogRef = this.dialog.open(ExportReportDialogComponent, {
      // Configure dialog options here
    });
  }


  cards: { mainHeading: string, secondHeading: string }[] = [
    { mainHeading: '0', secondHeading: 'Pending MI FERs' },
    { mainHeading: '0', secondHeading: 'Pending MI QAs' },
    { mainHeading: '20', secondHeading: 'Pending FERs' },
    { mainHeading: '30', secondHeading: 'Pending QAs' },
    { mainHeading: '12', secondHeading: 'Pending Repurchases' },
    { mainHeading: '28', secondHeading: 'Pending Repurchases' },
    { mainHeading: '10', secondHeading: 'Pending Repurchases' },
    { mainHeading: '0', secondHeading: 'Pending MI QAs' }
  ];

  
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log('button is clicked but it is not going up');
  }

  showTable: boolean = false;


  reportsTableData = [
    { column1: 'Row 1 - Column 1', column2: 'Row 1 - Column 2', column3: 'Row 1 - Column 3', column4: 'Row 1 - Column 4', column5: 'Row 1 - Column 5' },
    { column1: 'Row 2 - Column 1', column2: 'Row 2 - Column 2', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5' },
    { column1: 'Row 3 - Column 1', column2: 'Row 3 - Column 2', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5' },
    { column1: 'Row 1 - Column 1', column2: 'Row 1 - Column 2', column3: 'Row 1 - Column 3', column4: 'Row 1 - Column 4', column5: 'Row 1 - Column 5' },
    { column1: 'Row 2 - Column 1', column2: 'Row 2 - Column 2', column3: 'Row 2 - Column 3', column4: 'Row 2 - Column 4', column5: 'Row 2 - Column 5' },
    { column1: 'Row 3 - Column 1', column2: 'Row 3 - Column 2', column3: 'Row 3 - Column 3', column4: 'Row 3 - Column 4', column5: 'Row 3 - Column 5' },
    // Add more rows as needed
  ];
  
  

}
