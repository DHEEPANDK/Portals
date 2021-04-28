import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceLoginComponent } from './maintenance-login.component';

describe('MaintenanceLoginComponent', () => {
  let component: MaintenanceLoginComponent;
  let fixture: ComponentFixture<MaintenanceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
