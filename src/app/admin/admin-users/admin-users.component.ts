import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../catalogue.service';
// import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  appUsers;
  mode = 'list';
  currentAppUser;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllAppUsers();
  }

  onGetAllAppUsers()  {
    this.catalogueService.getAllAppUsers()
    .subscribe(data => {
        this.appUsers = data;
    }, err => {
      console.log('problem  to load users ', err);
    });
  }

  onDeleteAppUser(usr) {
    const conf = confirm('Etes vous sure ?');
    if (!conf) { return; }
    this.catalogueService.deleteRessource(usr._links.self.href)
        .subscribe(data => {
          this.onGetAllAppUsers();
        }, err => {
          console.log('User not deleted !!', err);
        });

  }

  onAddAppUser() {
    this.mode = 'new-user';

  }
 
  onSaveAppUser(data) {
    console.log('new User!!', data);
    const url = this.catalogueService.host + '/appUsers';
    this.catalogueService.postRessource(url, data)
         .subscribe(data => {
            this.onGetAllAppUsers();
            this.mode = 'list';
         }, err => {
           console.log('add user has failed !!', err);
         });
  }


  onUpdateAppUser(data) {
 
    this.catalogueService.putRessource(this.currentAppUser._links.self.href, data)
         .subscribe(data => {
            this.onGetAllAppUsers();
            this.mode = 'list';
         }, err => {
           console.log('update user has failed !!', err);
         });
  }

  
  onEditAppUser(usr) {
     this.catalogueService.getRessource(usr._links.self.href)
        .subscribe(data => {
        this.currentAppUser = data;
        this.mode = 'edit-user';
        }, err => {
          console.log('problem was happen wen edit user', err);
        });

  }

}
