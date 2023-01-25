import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvallijstComponent } from './afvallijst.component';

describe('AfvallijstComponent', () => {
  let component: AfvallijstComponent;
  let fixture: ComponentFixture<AfvallijstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfvallijstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfvallijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // @ts-ignore
    expect(component).toBeTruthy();
  });
});
