import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalExpenseReportComponent } from './total-expense-report.component';

describe('TotalExpenseReportComponent', () => {
  let component: TotalExpenseReportComponent;
  let fixture: ComponentFixture<TotalExpenseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalExpenseReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalExpenseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
