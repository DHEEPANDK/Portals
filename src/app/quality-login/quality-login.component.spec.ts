import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityLoginComponent } from './quality-login.component';

describe('QualityLoginComponent', () => {
  let component: QualityLoginComponent;
  let fixture: ComponentFixture<QualityLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
