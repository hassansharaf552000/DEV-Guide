import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SocialAccountService } from '../../services/SocialAccount/social-account.service';
import { ISocialAccount } from '../../../core/enums/SocialAccount';
import { AddsocialaccountComponent } from '../addsocialaccount/addsocialaccount.component';

@Component({
  selector: 'app-social-accounts-list',
  templateUrl: './social-accounts-list.component.html',
  styleUrls: ['./social-accounts-list.component.css']
})
export class SocialAccountsListComponent implements OnInit {
  socialAccounts: ISocialAccount[] = [];

  constructor(private socialAccountService: SocialAccountService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadSocialAccounts();
  }

  // Load social accounts for the current user
  loadSocialAccounts(): void {
    this.socialAccountService.getSocialAccounts().subscribe((accounts) => {
      this.socialAccounts = accounts;
    });
  }

  openAddSocialAccountModal(): void {
    const dialogRef = this.dialog.open(AddsocialaccountComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: ISocialAccount) => {
      if (result) {
        //this.socialAccounts.push(result); 
        console.log(result) // Add the new account to the list
      }
    });
  }
}
