import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedTermsComponent } from './fixed-terms.component';

describe('FixedTermsComponent', () => {
  let component: FixedTermsComponent;
  let fixture: ComponentFixture<FixedTermsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedTermsComponent]
    });
    fixture = TestBed.createComponent(FixedTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
