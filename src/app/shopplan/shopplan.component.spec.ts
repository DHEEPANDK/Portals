import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopplanComponent } from './shopplan.component';

describe('ShopplanComponent', () => {
  let component: ShopplanComponent;
  let fixture: ComponentFixture<ShopplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
