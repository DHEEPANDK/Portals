import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverylistComponent } from './deliverylist.component';

describe('DeliverylistComponent', () => {
  let component: DeliverylistComponent;
  let fixture: ComponentFixture<DeliverylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
