import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fideCoin-front';


  constructor(private authenticationService: AuthenticationService) {

  }
 

  ngOnInit(): void {
   this.authenticationService.loadToken();
  }


  isAdmin() {
    return this.authenticationService.isAdmin();
  }
  isUser() {
    return this.authenticationService.isUser();
  }
   isAuthenticated() {
     return this.authenticationService.isAuthenticated();
   }
   logOut() {
     // initialiser les parametres et supprimer le token du local storage
     this.authenticationService.logOut();

   }
}
