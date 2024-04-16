import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationsComponent } from './input-validations.component';

describe('InputValidationsComponent', () => {
  let component: InputValidationsComponent;
  let fixture: ComponentFixture<InputValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputValidationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
