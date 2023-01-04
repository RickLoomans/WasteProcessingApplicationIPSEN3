import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatDetailsComponent } from './resultaat-details.component';

describe('ResultaatDetailsComponent', () => {
  let component: ResultaatDetailsComponent;
  let fixture: ComponentFixture<ResultaatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultaatDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultaatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
