import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  produits;
  mode = 'list';
  currentProduit;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllProduits();
  }

  onGetAllProduits()  {
    this.catalogueService.getAllProduits()
    .subscribe(data => {
        this.produits = data;
    }, err => {
      console.log('problem  to load produits ', err);
    });
  }

  onDeleteProd(p) {
    const conf = confirm('Etes vous sure ?');
    if (!conf) { return; }
    this.catalogueService.deleteRessource(p._links.self.href)
        .subscribe(data => {
          this.onGetAllProduits();
        }, err => {
          console.log('Produit not deleted !!', err);
        });

  }

  onAddProd() {
    this.mode = 'new-prod';

  }
 
  onSaveProd(data) {
    console.log('new Produit!!', data);
    const url = this.catalogueService.host + '/produits';
    this.catalogueService.postRessource(url, data)
         .subscribe(data => {
            this.onGetAllProduits();
            this.mode = 'list';
         }, err => {
           console.log('add categorie has failed !!', err);
         });
  }


  onUpdateProd(data) {
 
    this.catalogueService.putRessource(this.currentProduit._links.self.href, data)
         .subscribe(data => {
            this.onGetAllProduits();
            this.mode = 'list';
         }, err => {
           console.log('add product has failed !!', err);
         });
  }

  
  onEditProd(prd) {
     this.catalogueService.getRessource(prd._links.self.href)
        .subscribe(data => {
        this.currentProduit = data;
        this.mode = 'edit-prod';
        }, err => {
          console.log('problem was happen wen edit produit', err);
        });

  }


}
