import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceWidgetComponent } from './advice-widget.component';

describe('AdviceWidgetComponent', () => {
  let component: AdviceWidgetComponent;
  let fixture: ComponentFixture<AdviceWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
