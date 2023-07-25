import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddManuallyDialogComponent } from './add-manually-dialog.component';

describe('AddManuallyDialogComponent', () => {
  let component: AddManuallyDialogComponent;
  let fixture: ComponentFixture<AddManuallyDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddManuallyDialogComponent]
    });
    fixture = TestBed.createComponent(AddManuallyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
