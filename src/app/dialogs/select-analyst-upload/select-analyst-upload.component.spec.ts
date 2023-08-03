import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnalystUploadComponent } from './select-analyst-upload.component';

describe('SelectAnalystUploadComponent', () => {
  let component: SelectAnalystUploadComponent;
  let fixture: ComponentFixture<SelectAnalystUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectAnalystUploadComponent]
    });
    fixture = TestBed.createComponent(SelectAnalystUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
