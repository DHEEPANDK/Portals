import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdashboardComponent } from './empdashboard.component';

describe('EmpdashboardComponent', () => {
  let component: EmpdashboardComponent;
  let fixture: ComponentFixture<EmpdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
