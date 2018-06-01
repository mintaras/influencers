import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { BrandsService } from '../../_services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands: any;

  constructor(private bS: BrandsService) { }

  ngOnInit() {
    this.bS.getBrands().then(result => this.brands = result);
  }

}
