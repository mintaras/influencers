import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

type UserFields = 'name' | 'email' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  formErrors: FormErrors = {
    'name': '',
    'email': '',
    'password': ''
  }
  validationMessages = {
    'name': {
      'required': 'Name is required'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email must be valid'
    },
    'password': {
      'required': 'Password is required',
      'pattern': 'Password must contain at least one letter and one number. ',
      'minlength': 'Password must be at least 8 characters long. ',
      'maxlength': 'Password cannot be more than 40 characters long. '
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signUpForm = this.fb.group({
      'name': ['', [
        Validators.required
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(8),
        Validators.maxLength(40),
        Validators.required
      ]]
    });

    this.signUpForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.signUpForm) {
      return;
    }

    const form = this.signUpForm;

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

  signUp() {
    this.router.navigate(['']);
  }
}
