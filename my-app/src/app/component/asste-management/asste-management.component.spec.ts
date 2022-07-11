import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssteManagementComponent } from './asste-management.component';

describe('AssteManagementComponent', () => {
  let component: AssteManagementComponent;
  let fixture: ComponentFixture<AssteManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssteManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
