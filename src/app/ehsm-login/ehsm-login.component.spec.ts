import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmLoginComponent } from './ehsm-login.component';

describe('EhsmLoginComponent', () => {
  let component: EhsmLoginComponent;
  let fixture: ComponentFixture<EhsmLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
