import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOperationsComponent } from './headerOperations.component';

describe('HeaderComponent', () => {
  let component:  HeaderOperationsComponent ;
  let fixture: ComponentFixture< HeaderOperationsComponent >;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOperationsComponent ]
    });
    fixture = TestBed.createComponent( HeaderOperationsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
