import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ProductModel } from '../shared/models/product.model'
import { CategorieModel } from '../shared/models/categorie.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  produits;
  mode = 'list';
  currentProduit: ProductModel;
  currentCategorie: CategorieModel;
  nomSelectedCategorie: string;

  categoriesProd;

  constructor(private catalogueService: CatalogueService) { }

  ngOnInit() {
    this.onGetAllProduits();
    this.onGetAllCategories();
  }

  onGetAllCategories()  {
    this.catalogueService.getAllCategoriesCustomRest()
    .subscribe(data => {
        this.categoriesProd = data;
        console.log(' categories from custom rest ', this.categoriesProd);
    }, err => {
      console.log('problem  t9o load categories ', err);
    });
  }

  onGetAllProduits()  {
    this.catalogueService.getAllProduitsCustomRest()
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
     console.log('data updated====================>', data)
     data.urlPhoto = this.currentProduit.urlPhoto;
     const url = this.catalogueService.host + '/adminProd';
    this.catalogueService.putRessource(url, data)
         .subscribe(data => {
            this.onGetAllProduits();
            this.mode = 'list';
         }, err => {
           console.log('add product has failed !!', err);
         });
  }

  
  onEditProd(prd) {
      // this.catalogueService.getRessource(prd.idProduit)
      //       .subscribe(data => {
        this.currentProduit = prd;
        console.log('currentProduit^^^^^^^^^^^^^^^>', this.currentProduit);
        this.nomSelectedCategorie = this.currentProduit.categorie.nomCategorie;
           console.log('nom selected Categorie^^^^^^^^^^^^^^^>', this.nomSelectedCategorie);
        // this.catalogueService.getRessource(prd._links.categorie.href)
        //     .subscribe(cat => { this.currentCategorie = cat;
        //       this.currentProduit.categorie = this.currentCategorie.nomCategorie;
        //       console.log('Categorie associer a ce  produit', cat);
        //               }, err => { console.log('categorie inexistante', err); });
        console.log('Edit produit', this.currentProduit);
         this.mode = 'edit-prod';
        // }, err => {
        //   console.log('problem was happen wen edit produit', err);
        // });

  }

  handleUrlPhoto(urlImage) {
  console.log('urlPhoto avant aupdate', urlImage);
  this.currentProduit.urlPhoto = urlImage;
  console.log('current produit avant update', this.currentProduit)
 }

}
