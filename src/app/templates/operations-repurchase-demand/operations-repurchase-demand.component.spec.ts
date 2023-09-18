import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsRepurchaseDemandComponent } from './operations-repurchase-demand.component';

describe('OperationsRepurchaseDemandComponent', () => {
  let component: OperationsRepurchaseDemandComponent;
  let fixture: ComponentFixture<OperationsRepurchaseDemandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OperationsRepurchaseDemandComponent]
    });
    fixture = TestBed.createComponent(OperationsRepurchaseDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
