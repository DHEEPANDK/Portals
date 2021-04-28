import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkupdComponent } from './workupd.component';

describe('WorkupdComponent', () => {
  let component: WorkupdComponent;
  let fixture: ComponentFixture<WorkupdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkupdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkupdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
