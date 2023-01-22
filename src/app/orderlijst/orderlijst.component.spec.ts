import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlijstComponent } from './orderlijst.component';

describe('OrderlijstComponent', () => {
  let component: OrderlijstComponent;
  let fixture: ComponentFixture<OrderlijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlijstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
