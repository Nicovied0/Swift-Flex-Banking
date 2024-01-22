import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardsComponent } from './body-cards.component';

describe('BodyCardsComponent', () => {
  let component: BodyCardsComponent;
  let fixture: ComponentFixture<BodyCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BodyCardsComponent]
    });
    fixture = TestBed.createComponent(BodyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
