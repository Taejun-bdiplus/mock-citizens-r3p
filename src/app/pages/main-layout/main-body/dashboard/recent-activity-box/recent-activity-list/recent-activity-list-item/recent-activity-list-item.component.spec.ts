import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityListItemComponent } from './recent-activity-list-item.component';

describe('RecentActivityListItemComponent', () => {
  let component: RecentActivityListItemComponent;
  let fixture: ComponentFixture<RecentActivityListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentActivityListItemComponent]
    });
    fixture = TestBed.createComponent(RecentActivityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
