import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleavedataComponent } from './empleavedata.component';

describe('EmpleavedataComponent', () => {
  let component: EmpleavedataComponent;
  let fixture: ComponentFixture<EmpleavedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleavedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleavedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
