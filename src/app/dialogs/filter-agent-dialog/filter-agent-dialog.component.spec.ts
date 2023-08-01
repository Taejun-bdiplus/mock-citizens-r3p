import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAgentDialogComponent } from './filter-agent-dialog.component';

describe('FilterAgentDialogComponent', () => {
  let component: FilterAgentDialogComponent;
  let fixture: ComponentFixture<FilterAgentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterAgentDialogComponent]
    });
    fixture = TestBed.createComponent(FilterAgentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
