import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestementsComponent } from './investements.component';

describe('InvestementsComponent', () => {
  let component: InvestementsComponent;
  let fixture: ComponentFixture<InvestementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestementsComponent]
    });
    fixture = TestBed.createComponent(InvestementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
