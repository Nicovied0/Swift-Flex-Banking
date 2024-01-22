import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchBarOperationsComponent } from './serch-bar-operations.component';

describe('SerchBarOperationsComponent', () => {
  let component: SerchBarOperationsComponent;
  let fixture: ComponentFixture<SerchBarOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerchBarOperationsComponent]
    });
    fixture = TestBed.createComponent(SerchBarOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
