import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { InfluencersService } from '../../_services/influencers.service';

@Component({
  selector: 'app-influencers',
  templateUrl: './influencers.component.html',
  styleUrls: ['./influencers.component.scss']
})
export class InfluencersComponent implements OnInit {

  influencers: any;

  constructor(private iS: InfluencersService) { }

  ngOnInit() {
    this.iS.getInfluencers().then(result => this.influencers = result);
  }

}
