import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: any;

  constructor() { }

  ngOnInit() {
    this.fetchBrands();
  }

  fetchBrands() {
    let Brands = Parse.Object.extend("Brands4205");
    let brands = new Parse.Query(Brands);
    let that = this;

    brands.find({
      error: function(response, error) {
        console.log('Failed to create new object, with error code: ', error);
      }
    }).then(function(results) {
      let str = JSON.stringify(results);
      let obj = JSON.parse(str);
      that.brands = obj;
    });
  }

}
