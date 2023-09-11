import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepurRemitTemplateComponent } from './repur-remit-template.component';

describe('RepurRemitTemplateComponent', () => {
  let component: RepurRemitTemplateComponent;
  let fixture: ComponentFixture<RepurRemitTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepurRemitTemplateComponent]
    });
    fixture = TestBed.createComponent(RepurRemitTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
