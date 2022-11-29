import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatVerwerkenStofComponent } from './resultaat-verwerken-stof.component';

describe('ResultaatVerwerkenStofComponent', () => {
  let component: ResultaatVerwerkenStofComponent;
  let fixture: ComponentFixture<ResultaatVerwerkenStofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultaatVerwerkenStofComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultaatVerwerkenStofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
