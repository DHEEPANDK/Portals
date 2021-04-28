import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmincidentComponent } from './ehsmincident.component';

describe('EhsmincidentComponent', () => {
  let component: EhsmincidentComponent;
  let fixture: ComponentFixture<EhsmincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
