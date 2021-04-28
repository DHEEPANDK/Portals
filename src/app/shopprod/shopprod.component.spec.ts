import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopprodComponent } from './shopprod.component';

describe('ShopprodComponent', () => {
  let component: ShopprodComponent;
  let fixture: ComponentFixture<ShopprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
