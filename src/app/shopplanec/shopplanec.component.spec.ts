import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopplanecComponent } from './shopplanec.component';

describe('ShopplanecComponent', () => {
  let component: ShopplanecComponent;
  let fixture: ComponentFixture<ShopplanecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopplanecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopplanecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
