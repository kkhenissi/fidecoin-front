import {CategorieModel} from './categorie.model'
export class ProductModel {


    idProduit: number;
    nomProduit: string;
    designation: string;
    startPrice: number;
    currentPrice: number;
    categorie: CategorieModel;
    urlPhoto: string;



}