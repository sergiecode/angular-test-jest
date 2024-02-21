import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  public error?: any; // codigo

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService
  ) {
    this.form = this._formBuilder.group({
      valora: [
        '',
        [
          Validators.pattern('^[0-9]*$'),
          Validators.min(0),
          Validators.required,
        ],
      ],
      valorb: [
        '',
        [
          Validators.pattern('^[0-9]*$'),
          Validators.min(0),
          Validators.required,
        ],
      ],
      result: [''],
    });
  }

  ngOnInit(): void {}

  calcular($event: any) {
    if (this.form.invalid) {
      this.error = {
        code: 400,
        message: 'Error en los datos',
      };
      return;
    }
    $event?.preventDefault();
    this.form.controls['result'].setValue(
      Number(this.form.controls['valora'].value) +
        Number(this.form.controls['valorb'].value)
    );
  }
}
