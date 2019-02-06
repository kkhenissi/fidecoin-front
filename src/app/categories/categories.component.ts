import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private catService: CatalogueService ) { }
  categories;

  ngOnInit() {
    this.catService.getAllCategories()
        .subscribe(data => {
          this.categories = data;
        }, err => {
          console.log('error !!', err);
        });

  }

  onGetProduct(c) {
    

  }

}
