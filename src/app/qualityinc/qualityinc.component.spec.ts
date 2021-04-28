import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityincComponent } from './qualityinc.component';

describe('QualityincComponent', () => {
  let component: QualityincComponent;
  let fixture: ComponentFixture<QualityincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
