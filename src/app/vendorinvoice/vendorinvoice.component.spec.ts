import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorinvoiceComponent } from './vendorinvoice.component';

describe('VendorinvoiceComponent', () => {
  let component: VendorinvoiceComponent;
  let fixture: ComponentFixture<VendorinvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorinvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
