import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenprofileComponent } from './venprofile.component';

describe('VenprofileComponent', () => {
  let component: VenprofileComponent;
  let fixture: ComponentFixture<VenprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
