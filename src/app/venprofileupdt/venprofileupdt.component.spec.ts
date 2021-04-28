import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenprofileupdtComponent } from './venprofileupdt.component';

describe('VenprofileupdtComponent', () => {
  let component: VenprofileupdtComponent;
  let fixture: ComponentFixture<VenprofileupdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenprofileupdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenprofileupdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
