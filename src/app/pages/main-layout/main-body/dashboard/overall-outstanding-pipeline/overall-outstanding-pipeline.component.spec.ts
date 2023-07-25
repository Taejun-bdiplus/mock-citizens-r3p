import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallOutstandingPipelineComponent } from './overall-outstanding-pipeline.component';

describe('OverallOutstandingPipelineComponent', () => {
  let component: OverallOutstandingPipelineComponent;
  let fixture: ComponentFixture<OverallOutstandingPipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallOutstandingPipelineComponent]
    });
    fixture = TestBed.createComponent(OverallOutstandingPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
