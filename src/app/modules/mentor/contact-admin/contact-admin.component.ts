import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';






@Component({
  selector: 'app-contact-admin',
  templateUrl: './contact-admin.component.html',
  styleUrl: './contact-admin.component.css'
})
export class ContactAdminComponent   {
  contactForm: FormGroup;
  subjects = [
    { value: 'subject1', label: 'Subject 1' },
    { value: 'subject2', label: 'Subject 2' },
    // Add more subjects as needed
  ];

  private EMAILJS_SERVICE_ID = 'your_service_id';
  private EMAILJS_TEMPLATE_ID = 'your_template_id';
  private EMAILJS_USER_ID = 'your_user_id';

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      details: ['', [Validators.required, Validators.minLength(10)]],
      file: [null] // Handling file input, no required validation here
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.contactForm.patchValue({
        file: file
      });
    }
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    // Reference the form element
    const formElement = document.querySelector('form') as HTMLFormElement;

    if (formElement) {
      emailjs.sendForm(this.EMAILJS_SERVICE_ID, this.EMAILJS_TEMPLATE_ID, formElement, this.EMAILJS_USER_ID)
        .then(response => {
          console.log('Message sent successfully!', response);
          this.contactForm.reset();
        })
        .catch(error => {
          console.error('Error sending message', error);
        });
    } else {
      console.error('Form element not found');
    }
  }

 

}
