import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiInputComponent } from './bmi-input.component';

describe('BmiInputComponent', () => {
  let component: BmiInputComponent;
  let fixture: ComponentFixture<BmiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
