import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieToevoegenComponent } from './categorie-toevoegen.component';

describe('CategorieToevoegenComponent', () => {
  let component: CategorieToevoegenComponent;
  let fixture: ComponentFixture<CategorieToevoegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieToevoegenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
