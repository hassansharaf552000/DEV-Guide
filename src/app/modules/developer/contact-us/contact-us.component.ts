import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  form: FormGroup;
  returnUrl: string = '/';

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private activeRoute: ActivatedRoute,
 
  ) {
    this.form = this.builder.group({
      name: ["", [Validators.required, Validators.minLength(8)]],
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.pattern(/^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/)]],
      phonenumber: ["", [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
    });
    this.returnUrl = this.activeRoute.snapshot.params['returnUrl'];
  }

  onBlur(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }
}
