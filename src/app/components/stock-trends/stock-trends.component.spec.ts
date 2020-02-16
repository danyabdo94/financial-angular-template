import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTrendsComponent } from './stock-trends.component';

describe('StockTrendsComponent', () => {
  let component: StockTrendsComponent;
  let fixture: ComponentFixture<StockTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
