import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'firstname' | 'lastname' | 'instagramUsername' | 'youtubeUsername' | 'groups';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-influencers-dialog',
  templateUrl: './influencers-dialog.component.html',
  styleUrls: ['./influencers-dialog.component.scss']
})
export class InfluencersDialogComponent implements OnInit {

  influencersForm: FormGroup;
  formErrors: FormErrors = {
    'firstname': '',
    'lastname': '',
    'instagramUsername': '',
    'youtubeUsername': '',
    'groups': ''
  }
  validationMessages = {
    'firstname': {
      'required': 'Field is required'
    },
    'lastname': {
      'required': 'Field is required'
    },
    'instagramUsername': {
      'required': 'Field is required'
    },
    'youtubeUsername': {
      'required': 'Field is required'
    },
    'groups': {
      'required': 'Field is required'
    }
  }
  modalRef: BsModalRef;
  submitted: boolean = false;

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.influencersForm = this.fb.group({
      'firstname': ['', [
        Validators.required
      ]],
      'lastname': ['', [
        Validators.required
      ]],
      'instagramUsername': ['', [
        Validators.required
      ]],
      'youtubeUsername': ['', [
        Validators.required
      ]],
      'groups': ['', [
        Validators.required
      ]]
    });

    this.influencersForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.influencersForm) {
      return;
    }

    const form = this.influencersForm;

    for (const field in this.formErrors) {
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as {[key: string]: string})[key]}`;
              }
            }
          }
        }
      }
    }
  }

  submit() {
    this.submitted = true;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
