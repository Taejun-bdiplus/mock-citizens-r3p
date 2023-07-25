import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentViewTableComponent } from './recent-view-table.component';

describe('RecentViewTableComponent', () => {
  let component: RecentViewTableComponent;
  let fixture: ComponentFixture<RecentViewTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentViewTableComponent]
    });
    fixture = TestBed.createComponent(RecentViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
