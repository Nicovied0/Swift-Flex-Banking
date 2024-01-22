import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsHeaderComponent } from './buttons-header.component';

describe('ButtonsHeaderComponent', () => {
  let component: ButtonsHeaderComponent;
  let fixture: ComponentFixture<ButtonsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsHeaderComponent]
    });
    fixture = TestBed.createComponent(ButtonsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
