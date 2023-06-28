import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystsComponent } from './analysts.component';

describe('AnalystsComponent', () => {
  let component: AnalystsComponent;
  let fixture: ComponentFixture<AnalystsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalystsComponent]
    });
    fixture = TestBed.createComponent(AnalystsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
