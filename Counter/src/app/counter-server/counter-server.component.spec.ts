import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterServerComponent } from './counter-server.component';

describe('CounterServerComponent', () => {
  let component: CounterServerComponent;
  let fixture: ComponentFixture<CounterServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
