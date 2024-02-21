import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  flushMicrotasks,
  tick,
  waitForAsync,
} from '@angular/core/testing';

import { FormComponent } from './form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const testCalculo = (
  a: number,
  b: number,
  error: boolean,
  expected: number,
  component: FormComponent
) => {
  let errors: any = {};
  let valora = component.form.controls['valora'];
  let valorb = component.form.controls['valorb'];
  let result = component.form.controls['result'];
  valora.setValue(a);
  valorb.setValue(b);
  errors = valora?.errors || {};
  expect(errors['required']).toBeFalsy(); // Es false porque no está vacío
  errors = valorb?.errors || {};
  expect(errors['required']).toBeFalsy(); // Es false porque no está vacío
  expect(result.value).toBe(''); // Es undefined porque no se ha hecho submit
  component.calcular(null);
  if (error) {
    expect(component.error?.code === 400).toBeTruthy();
  } else {
    expect(result.value).toBe(expected);
  }
};

describe('ProductComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('Valor a es requerido', () => {
    let errors: any = {};
    let name = component.form.controls['valora'];
    expect(name?.valid).toBeFalsy(); // Esto es false porque está vacío el input a

    errors = name?.errors || {};
    expect(errors['required']).toBeTruthy(); // Esto es verdadero por que es requerido y está vacío

    name.setValue('5'); // Seteo un valor deja de estar vacío
    errors = name?.errors || {};
    expect(errors['required']).toBeFalsy(); // Es false porque no está vacío
  });

  it(`Resultado de test 1`, () => {
    testCalculo(5, 5, false, 10, component);
  });
  it(`Resultado de test 2`, () => {
    testCalculo(50, 50, false, 100, component);
  });
  it(`Resultado de test 3`, () => {
    testCalculo(-5, 5, true, 0, component);
  });
  it(`Resultado de test 4`, () => {
    testCalculo(15, 5, false, 20, component);
  });
});
