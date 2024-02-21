import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
  public product?: Product;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.getProduct(7).subscribe((product: Product) => {
      this.product = product;
    });
  }
}
