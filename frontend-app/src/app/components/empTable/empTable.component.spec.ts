import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTableComponent } from './empTable.component';

describe('EmpTableComponent', () => {
  let component: EmpTableComponent;
  let fixture: ComponentFixture<EmpTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpTableComponent]
    });
    fixture = TestBed.createComponent(EmpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
