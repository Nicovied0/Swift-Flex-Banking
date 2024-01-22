import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxLinksComponent } from './box-links.component';

describe('BoxLinksComponent', () => {
  let component: BoxLinksComponent;
  let fixture: ComponentFixture<BoxLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxLinksComponent]
    });
    fixture = TestBed.createComponent(BoxLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
