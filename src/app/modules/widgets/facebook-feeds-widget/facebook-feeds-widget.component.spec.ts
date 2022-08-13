import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookFeedsWidgetComponent } from './facebook-feeds-widget.component';

describe('FacebookFeedsWidgetComponent', () => {
  let component: FacebookFeedsWidgetComponent;
  let fixture: ComponentFixture<FacebookFeedsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookFeedsWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacebookFeedsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
