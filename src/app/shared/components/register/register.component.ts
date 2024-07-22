import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form:FormGroup
  constructor(private router:Router,private builder:FormBuilder){
    this.form = this.builder.group({
      email: ["", [Validators.required, Validators.email]],
      personname:["",[Validators.required,Validators.minLength(20)]],
      username:["",[Validators.required,Validators.pattern(/^\S*$/),Validators.minLength(8)]],
      phonenumber:["",[Validators.required,Validators.pattern(/^\d{11}$/)]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]],
    
  })
}
send() {
  console.log(this.form.value);
}

}
