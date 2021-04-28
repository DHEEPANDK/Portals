import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaledataComponent } from './saledata.component';

describe('SaledataComponent', () => {
  let component: SaledataComponent;
  let fixture: ComponentFixture<SaledataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaledataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
