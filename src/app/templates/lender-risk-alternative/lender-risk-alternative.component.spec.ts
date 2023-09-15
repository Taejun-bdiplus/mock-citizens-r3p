import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderRiskAlternativeComponent } from './lender-risk-alternative.component';

describe('LenderRiskAlternativeComponent', () => {
  let component: LenderRiskAlternativeComponent;
  let fixture: ComponentFixture<LenderRiskAlternativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenderRiskAlternativeComponent]
    });
    fixture = TestBed.createComponent(LenderRiskAlternativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
