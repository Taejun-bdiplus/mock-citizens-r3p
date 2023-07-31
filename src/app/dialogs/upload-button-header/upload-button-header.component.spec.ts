import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadButtonHeaderComponent } from './upload-button-header.component';

describe('UploadButtonHeaderComponent', () => {
  let component: UploadButtonHeaderComponent;
  let fixture: ComponentFixture<UploadButtonHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadButtonHeaderComponent]
    });
    fixture = TestBed.createComponent(UploadButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
