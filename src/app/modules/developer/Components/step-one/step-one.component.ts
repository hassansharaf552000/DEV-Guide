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
  constructor(private router: Router,private Account:AccountService) {}
  CVFile: File|null = null;

  goToNextStep() {
    if(this.CVFile!= null){
      this.Account.updateFormData('CV', this.CVFile);
      this.router.navigate(['/developer/step-two']);
    }

  }
  SelectFile(event:any){
    const file = event.target.files[0];
    this.CVFile = file;

    console.log(this.CVFile);

  }
}
