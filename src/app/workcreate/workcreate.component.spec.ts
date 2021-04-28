import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkcreateComponent } from './workcreate.component';

describe('WorkcreateComponent', () => {
  let component: WorkcreateComponent;
  let fixture: ComponentFixture<WorkcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
