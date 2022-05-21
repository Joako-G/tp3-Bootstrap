import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2bComponent } from './punto2b.component';

describe('Punto2bComponent', () => {
  let component: Punto2bComponent;
  let fixture: ComponentFixture<Punto2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto2bComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
