import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProduitsComponent } from './produits/produits.component';
import { HttpClient } from 'selenium-webdriver/http';
import { CatalogueService } from './catalogue.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { UploadPhotoComponent } from './upload-photo/upload-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ProduitsComponent,
    LoginComponent,
    AdminCategoriesComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    UploadPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatalogueService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
