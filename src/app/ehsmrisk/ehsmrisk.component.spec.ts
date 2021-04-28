import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmriskComponent } from './ehsmrisk.component';

describe('EhsmriskComponent', () => {
  let component: EhsmriskComponent;
  let fixture: ComponentFixture<EhsmriskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmriskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
