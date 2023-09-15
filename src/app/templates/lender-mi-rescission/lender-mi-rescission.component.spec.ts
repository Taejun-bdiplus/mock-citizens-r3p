import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenderMiRescissionComponent } from './lender-mi-rescission.component';

describe('LenderMiRescissionComponent', () => {
  let component: LenderMiRescissionComponent;
  let fixture: ComponentFixture<LenderMiRescissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenderMiRescissionComponent]
    });
    fixture = TestBed.createComponent(LenderMiRescissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
