import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderRepurchaseDemandNoticeComponent } from './lender-repurchase-demand-notice.component';

describe('LenderRepurchaseDemandNoticeComponent', () => {
  let component: LenderRepurchaseDemandNoticeComponent;
  let fixture: ComponentFixture<LenderRepurchaseDemandNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenderRepurchaseDemandNoticeComponent]
    });
    fixture = TestBed.createComponent(LenderRepurchaseDemandNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
