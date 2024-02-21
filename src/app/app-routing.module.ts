import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'product', component: ProductComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
