import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveapplyComponent } from './empleaveapply.component';

describe('EmpleaveapplyComponent', () => {
  let component: EmpleaveapplyComponent;
  let fixture: ComponentFixture<EmpleaveapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleaveapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleaveapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
