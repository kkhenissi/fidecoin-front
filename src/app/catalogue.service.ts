import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {


  public host: String = 'http://localhost:8082';

  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }


  getAllProduitsCustomRest() {
      const header = new HttpHeaders({'authorization': this.authService.jwt});
      return this.http.get(this.host + '/adminProd', {headers: header});
               }
  getAllProduits(): any {
    return this.http.get(this.host + '/produits');
   }

  getAllCategoriesCustomRest() {
    const header = new HttpHeaders({'authorization': this.authService.jwt});
    return this.http.get(this.host + '/adminCat', {headers: header});
   }

   getAllCategories() {
    return this.http.get(this.host + '/categories');
   }

   getAllAppUsers(): any {
    return this.http.get(this.host + '/appUsers');
  }


   getRessource(url) {
       return this.http.get(url);
   }

   deleteRessource(url) {
     const header = new HttpHeaders({'authorization': this.authService.jwt});
    return this.http.delete(url, {headers: header});

   }

   postRessource(url, data) {
    const header = new HttpHeaders({'authorization': this.authService.jwt});
   return this.http.post(url, data,  {headers: header});

  }

  putRessource(url, data) {
    const header = new HttpHeaders({'authorization': this.authService.jwt});
    console.log('what in data here =====>', data);
    console.log('what in url here =====>', url);
    return this.http.put(url, data,  {headers: header});

  }
}
