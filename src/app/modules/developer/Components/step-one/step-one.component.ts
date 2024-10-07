import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { log } from 'console';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.css',
})
export class StepOneComponent {
  formData: any = {
    CV: File,
  };
  constructor(private router: Router,private Account:AccountService) {}

  goToNextStep() {
    this.Account.updateFormData('CV', this.formData);
    this.router.navigate(['/developer/step-two']);
    
  }
}
