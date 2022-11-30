import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReststofVerwerkenComponent } from './reststof-verwerken.component';

describe('ReststofVerwerkenComponent', () => {
  let component: ReststofVerwerkenComponent;
  let fixture: ComponentFixture<ReststofVerwerkenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReststofVerwerkenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReststofVerwerkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
