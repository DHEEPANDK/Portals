import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityusaComponent } from './qualityusa.component';

describe('QualityusaComponent', () => {
  let component: QualityusaComponent;
  let fixture: ComponentFixture<QualityusaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualityusaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualityusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
