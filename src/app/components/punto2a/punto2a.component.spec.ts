import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2aComponent } from './punto2a.component';

describe('Punto2aComponent', () => {
  let component: Punto2aComponent;
  let fixture: ComponentFixture<Punto2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
