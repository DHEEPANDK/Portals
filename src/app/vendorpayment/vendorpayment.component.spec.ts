import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorpaymentComponent } from './vendorpayment.component';

describe('VendorpaymentComponent', () => {
  let component: VendorpaymentComponent;
  let fixture: ComponentFixture<VendorpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
