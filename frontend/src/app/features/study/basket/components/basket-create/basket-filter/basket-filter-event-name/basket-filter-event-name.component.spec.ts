import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketFilterEventNameComponent } from './basket-filter-event-name.component';

describe('BasketFilterEventNameComponent', () => {
  let component: BasketFilterEventNameComponent;
  let fixture: ComponentFixture<BasketFilterEventNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketFilterEventNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketFilterEventNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
