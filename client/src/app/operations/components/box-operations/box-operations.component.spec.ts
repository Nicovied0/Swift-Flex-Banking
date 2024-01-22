import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOperationsComponent } from './box-operations.component';

describe('BoxOperationsComponent', () => {
  let component: BoxOperationsComponent;
  let fixture: ComponentFixture<BoxOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxOperationsComponent]
    });
    fixture = TestBed.createComponent(BoxOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
