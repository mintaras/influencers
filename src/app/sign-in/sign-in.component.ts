import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Parse from 'parse';

type UserFields = 'username' | 'password';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  loginError: string = '';
  formErrors: FormErrors = {
    'username': '',
    'password': ''
  }
  validationMessages = {
    'username': {
      'required': 'Username is required'
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
    this.signInForm = this.fb.group({
      'username': ['', [
        Validators.required
      ]],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(8),
        Validators.maxLength(40),
        Validators.required
      ]]
    });

    this.signInForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.signInForm) {
      return;
    }

    const form = this.signInForm;

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

  login() {
    Parse.User.logIn(
      this.signInForm.value['username'],
      this.signInForm.value['password'], {
      success: (user) => {
        this.router.navigate(['admin/registrations']);
      },
      error: (user, error) => {
        // The login failed. Check error to see why.
        this.loginError = error.message;
        console.log(error.message);
      }
    });
  }
}
