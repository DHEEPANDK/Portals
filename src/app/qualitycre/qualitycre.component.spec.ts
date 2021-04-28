import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitycreComponent } from './qualitycre.component';

describe('QualitycreComponent', () => {
  let component: QualitycreComponent;
  let fixture: ComponentFixture<QualitycreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualitycreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualitycreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
