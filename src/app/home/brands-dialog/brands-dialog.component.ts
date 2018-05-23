import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Parse from 'parse';

type UserFields = 'name' | 'phoneNumber' | 'email' | 'marketingType' | 'budget' | 'startDate';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-brands-dialog',
  templateUrl: './brands-dialog.component.html',
  styleUrls: ['./brands-dialog.component.scss']
})
export class BrandsDialogComponent implements OnInit {

  brandsForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'phoneNumber': '',
    'email': '',
    'marketingType': '',
    'budget': '',
    'startDate': ''
  }
  validationMessages = {
    'name': {
      'required': 'Field is required'
    },
    'email': {
      'required': 'Email is required. ',
      'email': 'Email must be valid. '
    },
    'phoneNumber': {
      'required': 'Phone number is required. ',
      'pattern': 'Phone number must be digits. ',
      'minlength': 'Phone number must be at least 8 chars. '
    },
    'marketingType': {
      'required': 'Field is required'
    },
    'budget': {
      'required': 'Field is required'
    },
    'startDate': {
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
    this.brandsForm = this.fb.group({
      'name': ['', [
        Validators.required
      ]],

      'phoneNumber': ['', [
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(7)
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'marketingType': ['', [
        Validators.required
      ]],
      'budget': ['', [
        Validators.required
      ]],
      'startDate': ['', [
        Validators.required
      ]]
    });

    this.brandsForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.brandsForm) {
      return;
    }

    const form = this.brandsForm;

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
    var Brands = Parse.Object.extend("Brands4205");
    var brands = new Brands();

console.log(this.brandsForm.value);

    brands.save(this.brandsForm.value, {
      success: function(response) {
        // TODO: 1) clear form 2) show success message
        this.submitOk = true;
        this.brandsForm.reset();
        setTimeout(function(){
          this.submitted = false;
        }, 1000);
        console.log(response);
      },
      error: function(response, error) {
        // TODO: 1) show error message
        this.submitError = true;
        setTimeout(function(){
          this.submitted = false;
        }, 1000);
        console.log('Failed to create new object, with error code: ', error);
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
