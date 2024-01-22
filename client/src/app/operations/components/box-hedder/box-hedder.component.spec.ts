import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxHedderComponent } from './box-hedder.component';

describe('BoxHedderComponent', () => {
  let component: BoxHedderComponent;
  let fixture: ComponentFixture<BoxHedderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxHedderComponent]
    });
    fixture = TestBed.createComponent(BoxHedderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
