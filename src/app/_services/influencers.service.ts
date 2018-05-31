import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class InfluencersService {

  constructor() { }

  getInfluencers() {
    let Influencers = Parse.Object.extend("Influencers4205");
    let influencersQuery = new Parse.Query(Influencers);
    return influencersQuery.find();
  }
}
