import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListsComponent } from './order-lists.component';

describe('OrderListsComponent', () => {
  let component: OrderListsComponent;
  let fixture: ComponentFixture<OrderListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
