import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadderCardsComponent } from './headder-cards.component';

describe('HeadderCardsComponent', () => {
  let component: HeadderCardsComponent;
  let fixture: ComponentFixture<HeadderCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadderCardsComponent]
    });
    fixture = TestBed.createComponent(HeadderCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
