import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Route, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogin(f) {
      this.authenticationService.login(f)
          .subscribe(resp => {
            console.log(resp);
          const jwt = resp.headers.get('Authorization');
          this.authenticationService.saveToken(jwt);
          this.router.navigateByUrl('/');
          }, err => {

          });

  }


 
}
