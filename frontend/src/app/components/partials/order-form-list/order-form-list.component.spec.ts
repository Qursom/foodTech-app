import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormListComponent } from './order-form-list.component';

describe('OrderFormListComponent', () => {
  let component: OrderFormListComponent;
  let fixture: ComponentFixture<OrderFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderFormListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
