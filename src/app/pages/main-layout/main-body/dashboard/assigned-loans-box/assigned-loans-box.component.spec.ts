import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLoansBoxComponent } from './assigned-loans-box.component';

describe('AssignedLoansBoxComponent', () => {
  let component: AssignedLoansBoxComponent;
  let fixture: ComponentFixture<AssignedLoansBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedLoansBoxComponent]
    });
    fixture = TestBed.createComponent(AssignedLoansBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
