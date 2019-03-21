import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../catalogue.service';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  categories;
  mode = 'list';
  currentCategorie;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllCategories();
  }

  onGetAllCategories()  {
    this.catalogueService.getAllCategories()
    .subscribe(data => {
        this.categories = data;
    }, err => {
      console.log('problem  to load categories ', err);
    });
  }

  onDeleteCat(c) {
    const conf = confirm('Etes vous sure ?');
    if (!conf) { return; }
    this.catalogueService.deleteRessource(c._links.self.href)
        .subscribe(data => {
          this.onGetAllCategories();
        }, err => {
          console.log('Categorie not deleted !!', err);
        });

  }

  onAddCat() {
    this.mode = 'new-cat';

  }
 
  onSaveCat(data) {
    console.log('new CAtegorie!!', data);
    const url = this.catalogueService.host + '/categories';
    this.catalogueService.postRessource(url, data)
         .subscribe(data => {
            this.onGetAllCategories();
            this.mode = 'list';
         }, err => {
           console.log('add categorie has failed !!', err);
         });
  }


  onUpdateCat(data) {
  //  const url = this.catalogueService.host + '/categories';
    this.catalogueService.putRessource(this.currentCategorie._links.self.href, data)
         .subscribe(data => {
            this.onGetAllCategories();
            this.mode = 'list';
         }, err => {
           console.log('add categorie has failed !!', err);
         });
  }

  
  onEditCat(cat) {
     this.catalogueService.getRessource(cat._links.self.href)
        .subscribe(data => {
        this.currentCategorie = data;
        this.mode = 'edit-cat';
        }, err => {
          console.log('problem was happen wen edit categorie', err);
        });

  }

}
