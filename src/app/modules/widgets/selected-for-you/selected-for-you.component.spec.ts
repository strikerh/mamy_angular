import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedForYouComponent } from './selected-for-you.component';

describe('SelectedForYouComponent', () => {
  let component: SelectedForYouComponent;
  let fixture: ComponentFixture<SelectedForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedForYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
