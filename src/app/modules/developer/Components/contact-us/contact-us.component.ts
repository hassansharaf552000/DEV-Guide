import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupportService } from '../../../../shared/services/support/support.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  form: FormGroup;
  returnUrl: string = '/';

  constructor(
    private router: Router,
    private builder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private supportService :SupportService,
    private toastr: ToastrService
  ) {
    this.form = this.builder.group({
      ObjectOfComplain: ['', [Validators.required, Validators.minLength(4)]],
      Email: ['', [Validators.required, Validators.email]],
      Message: [''],

      Username: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.{3,20}$)(?![_.-])(?!.*[_.-]{2})[a-zA-Z0-9_-]+([^._-])$/
          ),
        ],
      ],
      PhoneNumber: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]{11}$/)],
      ],
      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern(
      //       /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/
      //     ),
      //   ],
      // ],
    });
    this.returnUrl = this.activeRoute.snapshot.params['returnUrl'];
  }

  onBlur(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      control.markAsTouched();
    }
  }


//   onSubmit() {
//     if (this.form.valid) {
//       const supportData = {
//         Email: this.form.get('Email')?.value,
//         Username: this.form.get('Username')?.value,
//         PhoneNumber: this.form.get('Phonenumber')?.value,
//         ObjectOfComplain: this.form.get('ObjectOfComplain')?.value,
//         Message: this.form.get('Message')?.value,
//         // Date: new Date() // Set current date as Date
       
        
//       };
//       console.log('message',supportData);
//       this.supportService.submitSupport(supportData).subscribe(
//         response => {
         
//           alert('Support submitted successfully!');
//         },
//         error => {
//           alert('Failed to submit support.');
//         }
//       );
//     }
//   }
// }
send() {
  this.supportService.submitSupport(this.form.value).subscribe({
    next: (res: any) => {
      console.log(res);


      // if(res.Success == true){
      //   // this.supportService.submitSupport(res.Result)
      //   this.router.navigateByUrl(this.returnUrl)
      // }
      this.toastr.success('Message is succeed', res.message);


    },

    error: (err) => {
      console.log(err);
       this.toastr.error('Message is failed', err.error.message);
    }
  });
}}