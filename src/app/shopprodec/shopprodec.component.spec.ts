import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopprodecComponent } from './shopprodec.component';

describe('ShopprodecComponent', () => {
  let component: ShopprodecComponent;
  let fixture: ComponentFixture<ShopprodecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopprodecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopprodecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
