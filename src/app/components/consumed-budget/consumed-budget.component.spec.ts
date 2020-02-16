import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumedBudgetComponent } from './consumed-budget.component';

describe('ConsumedBudgetComponent', () => {
  let component: ConsumedBudgetComponent;
  let fixture: ComponentFixture<ConsumedBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumedBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumedBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
