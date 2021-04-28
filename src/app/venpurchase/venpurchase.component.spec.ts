import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenpurchaseComponent } from './venpurchase.component';

describe('VenpurchaseComponent', () => {
  let component: VenpurchaseComponent;
  let fixture: ComponentFixture<VenpurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenpurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
