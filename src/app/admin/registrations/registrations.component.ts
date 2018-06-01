import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as Parse from 'parse';
import { InfluencersService } from '../../_services/influencers.service';
import { BrandsService } from '../../_services/brands.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrls: ['./registrations.component.scss']
})
export class RegistrationsComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

  influencers: any;
  brands: any;
  registrationTypes: any = {
    brand: {
      name: '',
      email: '',
      phoneNumber: '',
      marketingType: '',
      budget: '',
    },
    influencer: {
      firstname: '',
      lastname: '',
      email: '',
      phoneNumber: '',
      city: '',
      instagramUsername: '',
      youtubeUsername: '',
      groups: '',
    }
  };
  registration: any;

  constructor(
    private iS: InfluencersService,
    private bS: BrandsService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.iS.getInfluencers().then(result => this.influencers = result);
    this.bS.getBrands().then(result => this.brands = result);
  }

  openModal(registration, type) {
    this.registration = Object.assign({}, this.registrationTypes[type], registration.attributes);
    this.modal.show();
  }

  handler(type: string, $event: ModalDirective) {
  }

}
