import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedLoansTableComponent } from './assigned-loans-table.component';

describe('AssignedLoansTableComponent', () => {
  let component: AssignedLoansTableComponent;
  let fixture: ComponentFixture<AssignedLoansTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedLoansTableComponent]
    });
    fixture = TestBed.createComponent(AssignedLoansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
