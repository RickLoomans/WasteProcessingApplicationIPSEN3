import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfvalComponent } from './afval.component';


describe('AfvalComponent', () => {
  let component: AfvalComponent;
  let fixture: ComponentFixture<AfvalComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfvalComponent ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(AfvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
