import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtweetComponent } from './subtweet.component';

describe('SubtweetComponent', () => {
  let component: SubtweetComponent;
  let fixture: ComponentFixture<SubtweetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtweetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
