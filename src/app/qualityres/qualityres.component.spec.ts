import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityresComponent } from './qualityres.component';

describe('QualityresComponent', () => {
  let component: QualityresComponent;
  let fixture: ComponentFixture<QualityresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
