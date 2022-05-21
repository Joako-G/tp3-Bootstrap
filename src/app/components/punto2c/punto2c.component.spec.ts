import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2cComponent } from './punto2c.component';

describe('Punto2cComponent', () => {
  let component: Punto2cComponent;
  let fixture: ComponentFixture<Punto2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
