import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`);
  }
}
