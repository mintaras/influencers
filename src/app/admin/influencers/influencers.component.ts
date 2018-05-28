import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  influencers: any;

  constructor() { }

  ngOnInit() {
    this.fetchInfluencers();
  }

  fetchInfluencers() {
    let Influencers = Parse.Object.extend("Influencers4205");
    let influencersQuery = new Parse.Query(Influencers);

    influencersQuery.find({
      success: (response) => {
        this.influencers = response;
      },
      error: function(response, error) {
        console.log('Failed to create new object, with error code: ', error);
      }
    });
  }

}
