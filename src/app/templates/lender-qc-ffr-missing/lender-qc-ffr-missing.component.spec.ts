import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderQcFfrMissingComponent } from './lender-qc-ffr-missing.component';

describe('LenderQcFfrMissingComponent', () => {
  let component: LenderQcFfrMissingComponent;
  let fixture: ComponentFixture<LenderQcFfrMissingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenderQcFfrMissingComponent]
    });
    fixture = TestBed.createComponent(LenderQcFfrMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
