import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrstemplateComponent } from './lrstemplate.component';

describe('LrstemplateComponent', () => {
  let component: LrstemplateComponent;
  let fixture: ComponentFixture<LrstemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LrstemplateComponent]
    });
    fixture = TestBed.createComponent(LrstemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
