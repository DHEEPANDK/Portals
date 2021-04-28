import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpprofileupdComponent } from './empprofileupd.component';

describe('EmpprofileupdComponent', () => {
  let component: EmpprofileupdComponent;
  let fixture: ComponentFixture<EmpprofileupdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpprofileupdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpprofileupdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
