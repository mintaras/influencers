import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Parse from 'parse';

type UserFields = 'firstname' | 'lastname' | 'instagramUsername' | 'youtubeUsername' | 'groups';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-influencers-dialog',
  templateUrl: './influencers-dialog.component.html',
  styleUrls: ['./influencers-dialog.component.scss']
})
export class InfluencersDialogComponent implements OnInit {
  @ViewChild(ModalDirective) modal: ModalDirective;

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
  submitOk: boolean = false;
  submitError: boolean = false;

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
    let Influencers = Parse.Object.extend("Influencers4205");
    let influencers = new Influencers();
    this.submitted = true;
    let that = this;

    influencers.save(this.influencersForm.value, {
      success: function(response) {
        that.submitOk = true;
        that.influencersForm.reset();
      },
      error: function(response, error) {
        that.submitError = true;
        console.log('Failed to create new object, with error code: ', error);
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modal.show();
  }

  handler(type: string, $event: ModalDirective) {
    this.submitted = false;
  }

}
