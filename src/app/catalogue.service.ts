import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: String = 'http://localhost:8080';

  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }


  getAllCategories() {
    return this.http.get(this.host + '/categories');
   }

   getRessource(url) {

    console.log('77777777777777', url);
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
    return this.http.patch(url, data,  {headers: header});
   
  }
}
