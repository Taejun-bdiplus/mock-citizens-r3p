import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityBoxComponent } from './recent-activity-box.component';

describe('RecentActivityBoxComponent', () => {
  let component: RecentActivityBoxComponent;
  let fixture: ComponentFixture<RecentActivityBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentActivityBoxComponent]
    });
    fixture = TestBed.createComponent(RecentActivityBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
