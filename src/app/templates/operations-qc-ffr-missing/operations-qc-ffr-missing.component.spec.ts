import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsQcFfrMissingComponent } from './operations-qc-ffr-missing.component';

describe('OperationsQcFfrMissingComponent', () => {
  let component: OperationsQcFfrMissingComponent;
  let fixture: ComponentFixture<OperationsQcFfrMissingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationsQcFfrMissingComponent]
    });
    fixture = TestBed.createComponent(OperationsQcFfrMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
