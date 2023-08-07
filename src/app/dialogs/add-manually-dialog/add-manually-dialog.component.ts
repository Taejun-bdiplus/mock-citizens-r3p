import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SelectAnalystUploadComponent } from '../select-analyst-upload/select-analyst-upload.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-add-manually-dialog',
  templateUrl: './add-manually-dialog.component.html',
  styleUrls: ['./add-manually-dialog.component.css']
})
export class AddManuallyDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddManuallyDialogComponent>, private dialog: MatDialog, private dataService: DataService) {}

  selectedAgency: string = '';
  noticeReceived: string = '';
  responsedue: string = '';
  loan: string = '';

  onAgencySelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    const agency: string = target.value as string;
    this.selectedAgency = agency === '' ? '' : 'Selected: ' + agency;
  }


  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  clearSelection() {
    this.selectedFile = null;
  }

  

  closeDialog(): void {
    this.dialogRef.close();
  }


  firstOptions = ['Self Reporting', 'Repurchase', 'FER', 'QA Audit', 'MI FER','MI QA Audit','GOV Audit'];
  secondOptions: string[] = [];

  onFirstOptionSelected(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'Self Reporting') {
      this.secondOptions = ['Option 1 - A', 'Option 1 - B', 'Option 1 - C'];
    } else if (selectedValue === 'Repurchase') {
      this.secondOptions = ['Option 2 - A', 'Option 2 - B', 'Option 2 - C'];
    } else if (selectedValue === 'FER') {
      this.secondOptions = ['Option 3 - A', 'Option 3 - B', 'Option 3 - C'];
    } 

    else if (selectedValue === 'QA Audit') {
      this.secondOptions = ['Option 4 - A', 'Option 4 - B', 'Option 4 - C'];
    }
    else if (selectedValue === 'MI FER') {
      this.secondOptions = ['Option 5 - A', 'Option 5 - B', 'Option 5 - C'];
    }
    else if (selectedValue === 'MI QA Audit') {
      this.secondOptions = ['Option 6 - A', 'Option 6 - B', 'Option 6 - C'];
    }
    else if (selectedValue === 'GOV Audit') {
      this.secondOptions = ['Option 7 - A', 'Option 7 - B', 'Option 7 - C'];
    }
    
    else {
      // Default options for other cases
      this.secondOptions = [];
    }
  }

  ///////////////////////////////////////////////////////////////

  assignedAnalyst: string = '';


  openAssignDialog(): void {
    const dialogRef = this.dialog.open(SelectAnalystUploadComponent, {
      width: '400px',
      panelClass: 'assign-dialog-container',
      autoFocus: false,
      data: { tableData: [] }
    });

    dialogRef.componentInstance.analystAssigned.subscribe((analystName: string) => {
      this.assignedAnalyst = analystName;
    });

    this.dataService.selectAnalyst().subscribe(
      (response: any[]) => {
        dialogRef.componentInstance.tableData = response.map(item => ({
          column1: item.colleague_fullname,
          column2: 'Value 1', // Example data, you can modify as needed
          column3: 'Data 1',  // Example data, you can modify as needed
          selected: false
        }));
      },
      error => {
        console.error('Select Analyst API error:', error);
        // Handle error here
      }
    );
  }

  // receivedDate: Date | null = null;
  // loanDueDate: Date | null = null;

  // onDateSelected(event: any, section: string) {
  //   if (section === 'receive') {
  //     this.receivedDate = event.value;
  //   } else if (section === 'response') {
  //     this.loanDueDate = event.value;
  //   }
  // }

  


  // api call on submit button ///////////////////

  onSubmit() {
    const payload = {
    "loan_number": this.loan,
    "requester_ent_id": 0,
    "requester_loan_number": "string",
    "responsible_ent_id": 0,
    "requester_ent_loan_number": "string",
    "context_id": 0,
    "channel_id": 0,
    "task_name": "string",
    "document_type": "string",
    "received_date": this.noticeReceived,
    "loan_due_date": this.responsedue,
    "loan_status": "string",
    "comments": "string",
    "colleague_id":123
    };

    this.dataService.submitLoanData(payload).subscribe(
      response => {
        console.log('API response:', response);
        // Handle success here
      },
      error => {
        console.error('API error:', error);
        // Handle error here
      }
    );
    this.closeDialog();
  }

  ///////////////////////////////////////////////////////////////////

  receiveDate: Date | null = null;
  responseDueDate: Date | null = null;

  // openDatePicker(section: string, datepicker: MatDatepicker<Date>) {
  //   datepicker.open();
  // }

  @ViewChild('receiveDatePicker') receiveDatePicker!: MatDatepicker<Date>;
  @ViewChild('responseDatePicker') responseDatePicker!: MatDatepicker<Date>;


  openDatePicker(section: string) {
    const datepicker = section === 'receive' ? this.receiveDatePicker : this.responseDatePicker;
    datepicker.open();
  }



  // //// api call on Select Analyst button /////////////////

  // callSelectAnalystApi(analystName: string) {
  //   const payload = [
  //     {
  //       "colleague_id": 1,
  //       "colleague_fullname": analystName,
  //       "email": "rajatkesarwani2011@gmail.com",
  //       "phone": "+91-1234567889",
  //       "manager_id": 0,
  //       "active": 1,
  //       "no_of_assignment": 1,
  //       "role_name": "Analyst",
  //       "role_id": "2"
  //     }
  //   ];

  //   this.dataService.selectAnalyst().subscribe(
  //     response => {
  //       console.log('Select Analyst API response:', response);
  //       // Handle success here
  //     },
  //     error => {
  //       console.error('Select Analyst API error:', error);
  //       // Handle error here
  //     }
  //   );
  // }

  
  


}
