import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FruitvegpageComponent } from './fruitvegpage.component';

describe('FruitvegpageComponent', () => {
  let component: FruitvegpageComponent;
  let fixture: ComponentFixture<FruitvegpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FruitvegpageComponent]
    });
    fixture = TestBed.createComponent(FruitvegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
