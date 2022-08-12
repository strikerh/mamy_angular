import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyWidgetComponent } from './family-widget.component';

describe('FamilyWidgetComponent', () => {
  let component: FamilyWidgetComponent;
  let fixture: ComponentFixture<FamilyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
