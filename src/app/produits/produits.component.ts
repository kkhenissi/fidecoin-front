import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../catalogue.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  private prodsUrl: string;
  products;
  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute,
              private router: Router) {
               router.events.subscribe(event => {
                 if (event instanceof NavigationEnd) {
                  this.prodsUrl  = atob(this.route.snapshot.params.urlProds);
                  this.getProduits(this.prodsUrl);
                  }
               });
              }

  ngOnInit() {
      console.log('url produit ===>', this.prodsUrl);

  }

  getProduits(url) {
           this.catalogueService.getRessource(url)
           .subscribe(data => {
            this.products = data;
        }, err => {
          console.log('error', err);
        });
  }

}
