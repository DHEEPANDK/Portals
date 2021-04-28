import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifcreateComponent } from './notifcreate.component';

describe('NotifcreateComponent', () => {
  let component: NotifcreateComponent;
  let fixture: ComponentFixture<NotifcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
