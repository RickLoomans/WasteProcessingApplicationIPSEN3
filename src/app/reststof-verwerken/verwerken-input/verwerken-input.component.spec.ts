import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwerkenInputComponent } from './verwerken-input.component';

describe('VerwerkenInputComponent', () => {
  let component: VerwerkenInputComponent;
  let fixture: ComponentFixture<VerwerkenInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerwerkenInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerwerkenInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
