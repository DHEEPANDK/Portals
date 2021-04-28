import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VengoodsreceiptComponent } from './vengoodsreceipt.component';

describe('VengoodsreceiptComponent', () => {
  let component: VengoodsreceiptComponent;
  let fixture: ComponentFixture<VengoodsreceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VengoodsreceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VengoodsreceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
