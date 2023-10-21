import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitTableComponent } from './fruitTable.component';

describe('FruitTableComponent', () => {
  let component: FruitTableComponent;
  let fixture: ComponentFixture<FruitTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitTableComponent]
    });
    fixture = TestBed.createComponent(FruitTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
