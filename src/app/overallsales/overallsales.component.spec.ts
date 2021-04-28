import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallsalesComponent } from './overallsales.component';

describe('OverallsalesComponent', () => {
  let component: OverallsalesComponent;
  let fixture: ComponentFixture<OverallsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
