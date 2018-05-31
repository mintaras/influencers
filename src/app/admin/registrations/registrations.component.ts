import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { InfluencersService } from '../../_services/influencers.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {

  influencers: any;

  constructor(private iS: InfluencersService) { }

  ngOnInit() {
    this.iS.getInfluencers().then(result => this.influencers = result);
  }

}
