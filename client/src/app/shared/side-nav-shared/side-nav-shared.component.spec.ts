import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavSharedComponent } from './side-nav-shared.component';

describe('SideNavSharedComponent', () => {
  let component: SideNavSharedComponent;
  let fixture: ComponentFixture<SideNavSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavSharedComponent]
    });
    fixture = TestBed.createComponent(SideNavSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
