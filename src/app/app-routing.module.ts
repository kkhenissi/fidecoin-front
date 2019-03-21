import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

const routes: Routes = [
  { path: 'products/:urlProds', component: ProduitsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'adminCategories', component: AdminCategoriesComponent},
  { path: 'adminProducts', component: AdminProductsComponent},
  { path: 'adminUsers', component: AdminUsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
