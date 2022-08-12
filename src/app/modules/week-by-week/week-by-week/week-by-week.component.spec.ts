import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekByWeekComponent } from './week-by-week.component';

describe('WeekByWeekComponent', () => {
  let component: WeekByWeekComponent;
  let fixture: ComponentFixture<WeekByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekByWeekComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
