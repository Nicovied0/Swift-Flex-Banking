import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSharedComponent } from './nav-bar-shared.component';

describe('NavBarSharedComponent', () => {
  let component: NavBarSharedComponent;
  let fixture: ComponentFixture<NavBarSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarSharedComponent]
    });
    fixture = TestBed.createComponent(NavBarSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
