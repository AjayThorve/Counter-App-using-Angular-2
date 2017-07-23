import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterCreaterComponent } from './counter-creater.component';

describe('CounterCreaterComponent', () => {
  let component: CounterCreaterComponent;
  let fixture: ComponentFixture<CounterCreaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterCreaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterCreaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
