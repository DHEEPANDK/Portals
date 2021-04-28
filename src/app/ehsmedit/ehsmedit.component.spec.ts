import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmeditComponent } from './ehsmedit.component';

describe('EhsmeditComponent', () => {
  let component: EhsmeditComponent;
  let fixture: ComponentFixture<EhsmeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
