import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitydboardComponent } from './qualitydboard.component';

describe('QualitydboardComponent', () => {
  let component: QualitydboardComponent;
  let fixture: ComponentFixture<QualitydboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitydboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitydboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
