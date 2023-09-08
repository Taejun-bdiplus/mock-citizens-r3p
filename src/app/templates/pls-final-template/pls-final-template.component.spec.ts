import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlsFinalTemplateComponent } from './pls-final-template.component';

describe('PlsFinalTemplateComponent', () => {
  let component: PlsFinalTemplateComponent;
  let fixture: ComponentFixture<PlsFinalTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlsFinalTemplateComponent]
    });
    fixture = TestBed.createComponent(PlsFinalTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
