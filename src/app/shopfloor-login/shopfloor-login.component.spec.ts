import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfloorLoginComponent } from './shopfloor-login.component';

describe('ShopfloorLoginComponent', () => {
  let component: ShopfloorLoginComponent;
  let fixture: ComponentFixture<ShopfloorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopfloorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfloorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
