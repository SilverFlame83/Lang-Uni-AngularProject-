import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansScheduleComponent } from './plans-schedule.component';

describe('PlansScheduleComponent', () => {
  let component: PlansScheduleComponent;
  let fixture: ComponentFixture<PlansScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
