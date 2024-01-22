import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeOfferComponent } from './we-offer.component';

describe('WeOfferComponent', () => {
  let component: WeOfferComponent;
  let fixture: ComponentFixture<WeOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeOfferComponent]
    });
    fixture = TestBed.createComponent(WeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
