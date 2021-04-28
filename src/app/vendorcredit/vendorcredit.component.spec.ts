import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorcreditComponent } from './vendorcredit.component';

describe('VendorcreditComponent', () => {
  let component: VendorcreditComponent;
  let fixture: ComponentFixture<VendorcreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorcreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
