import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './includes/home/home.component';
import { pathToFileURL } from 'url';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'product', component:ProductComponent,
  },
  {path:'add', component: AddProductComponent},
  {path:'getDetails/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
