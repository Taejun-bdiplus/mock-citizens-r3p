import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiQaUtrRescissionComponent } from './mi-qa-utr-rescission.component';

describe('MiQaUtrRescissionComponent', () => {
  let component: MiQaUtrRescissionComponent;
  let fixture: ComponentFixture<MiQaUtrRescissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiQaUtrRescissionComponent]
    });
    fixture = TestBed.createComponent(MiQaUtrRescissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
