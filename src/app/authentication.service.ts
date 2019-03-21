import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host2: string = 'http://localhost:8082';
  jwt: string;
  userName: string;
  roles: Array<string>;

  constructor(private http: HttpClient) { }

  login(data) {
   //   console.log(this.http.post(this.host2 + '/login', data, {observe: 'response'}));
    return this.http.post(this.host2 + '/login', data, {observe: 'response'});

  }


  saveToken(jwt: string): any {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let jwtObject=jwtHelper.decodeToken(this.jwt);
    this.userName = jwtObject.sub;
    this.roles = jwtObject.roles;

    console.log('admin ==', this.userName);
    console.log('roles ==', this.roles);


  }

  isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;

  }

  isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
    
  }

  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser());
  }
  logOut() {
    localStorage.removeItem('token');
    this.initCredentials();
   
  }

  initCredentials() {
    this.jwt = undefined;
    this.userName = undefined;
    this.roles = undefined;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

}
