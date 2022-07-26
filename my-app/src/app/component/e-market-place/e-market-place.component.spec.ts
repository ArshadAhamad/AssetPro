import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMarketPlaceComponent } from './e-market-place.component';

describe('EMarketPlaceComponent', () => {
  let component: EMarketPlaceComponent;
  let fixture: ComponentFixture<EMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMarketPlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
