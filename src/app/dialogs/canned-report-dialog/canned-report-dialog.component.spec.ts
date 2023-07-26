import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CannedReportDialogComponent } from './canned-report-dialog.component';

describe('CannedReportDialogComponent', () => {
  let component: CannedReportDialogComponent;
  let fixture: ComponentFixture<CannedReportDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CannedReportDialogComponent]
    });
    fixture = TestBed.createComponent(CannedReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
