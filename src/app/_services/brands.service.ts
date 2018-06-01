import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor() { }

  getBrands() {
    let Brands = Parse.Object.extend("Brands4205");
    let brandsQuery = new Parse.Query(Brands);
    return brandsQuery.find();
  }
}
