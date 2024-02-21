import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe traer información de un producto', (done) => {
    service.getProduct(7).subscribe((product) => {
      expect(product).toBeDefined();
      expect(product.id).toBe(7);
      expect(product.title).toBe('White Gold Plated Princess');
      done();
    });
  });

});
