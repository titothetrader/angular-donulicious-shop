import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutMenuComponent } from './donut-menu.component';

describe('DonutMenuComponent', () => {
  let component: DonutMenuComponent;
  let fixture: ComponentFixture<DonutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonutMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
