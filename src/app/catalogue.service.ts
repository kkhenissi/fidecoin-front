import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: String = 'http://localhost:8080';

  constructor(private http: HttpClient) { }


  getAllCategories() {
    return this.http.get(this.host + '/categories');
   }

   getRessource(url) {

    console.log('77777777777777', url);
    return this.http.get(url);
   }
}
