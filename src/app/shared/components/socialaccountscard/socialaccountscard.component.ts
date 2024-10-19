import { Component, Input } from '@angular/core';
import { ISocialAccount, SocialAccountsTypes } from '../../../core/enums/SocialAccount';

@Component({
  selector: 'app-socialaccountscard',
  templateUrl: './socialaccountscard.component.html',
  styleUrl: './socialaccountscard.component.css'
})
export class SocialaccountscardComponent {
  @Input() account!: ISocialAccount;

  getSocialPlatformName(): string {
    return SocialAccountsTypes[this.account.SocialName];  // Convert enum number to string
  }// Input property to receive the social account
}
