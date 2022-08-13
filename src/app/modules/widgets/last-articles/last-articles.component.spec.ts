import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastArticlesComponent } from './last-articles.component';

describe('LastArticlesComponent', () => {
  let component: LastArticlesComponent;
  let fixture: ComponentFixture<LastArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
