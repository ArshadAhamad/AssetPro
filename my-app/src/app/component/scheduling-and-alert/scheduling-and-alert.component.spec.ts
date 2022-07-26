import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingAndAlertComponent } from './scheduling-and-alert.component';

describe('SchedulingAndAlertComponent', () => {
  let component: SchedulingAndAlertComponent;
  let fixture: ComponentFixture<SchedulingAndAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulingAndAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulingAndAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
