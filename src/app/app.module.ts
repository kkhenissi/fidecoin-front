import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
// import { HttpClient } from 'selenium-webdriver/http';
import { CatalogueService } from './catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
import { AuthenticationService } from './auth/authentication.service';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './admin//admin-users/admin-users.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
 //   LoginComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [CatalogueService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
