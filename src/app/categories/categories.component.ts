import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService: CatalogueService, private router: Router ) { }
  categories;
  currentCategorie;

  ngOnInit() {
    this.catService.getAllCategories()
        .subscribe(data => {
          this.categories = data;
        }, err => {
          console.log('error !!', err);
        });

  }

  onGetProduct(cat) {
    this.currentCategorie = cat;

    let url = cat._links.produits.href;
    console.log('555555555555555555', url);
  //  console.log(this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits))));
 // alert('11')
 // this.router.navigateByUrl(btoa('/produits/' + btoa(urlProduits)));
 this.router.navigateByUrl('/products/' + btoa(url));


  }

}
