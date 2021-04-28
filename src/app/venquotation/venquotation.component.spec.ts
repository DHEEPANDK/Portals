import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenquotationComponent } from './venquotation.component';

describe('VenquotationComponent', () => {
  let component: VenquotationComponent;
  let fixture: ComponentFixture<VenquotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenquotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenquotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
