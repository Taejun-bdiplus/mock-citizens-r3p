import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderAppraisalComponent } from './lender-appraisal.component';

describe('LenderAppraisalComponent', () => {
  let component: LenderAppraisalComponent;
  let fixture: ComponentFixture<LenderAppraisalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenderAppraisalComponent]
    });
    fixture = TestBed.createComponent(LenderAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
