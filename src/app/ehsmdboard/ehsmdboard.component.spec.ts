import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhsmdboardComponent } from './ehsmdboard.component';

describe('EhsmdboardComponent', () => {
  let component: EhsmdboardComponent;
  let fixture: ComponentFixture<EhsmdboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhsmdboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhsmdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
