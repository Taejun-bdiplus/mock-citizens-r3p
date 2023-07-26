import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HocReportDialogComponent } from './hoc-report-dialog.component';

describe('HocReportDialogComponent', () => {
  let component: HocReportDialogComponent;
  let fixture: ComponentFixture<HocReportDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HocReportDialogComponent]
    });
    fixture = TestBed.createComponent(HocReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
