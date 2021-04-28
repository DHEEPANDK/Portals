import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifupdialogComponent } from './notifupdialog.component';

describe('NotifupdialogComponent', () => {
  let component: NotifupdialogComponent;
  let fixture: ComponentFixture<NotifupdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifupdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifupdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
