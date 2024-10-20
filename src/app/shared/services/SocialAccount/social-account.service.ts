import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISocialAccount } from '../../../core/enums/SocialAccount';

@Injectable({
  providedIn: 'root'
})
export class SocialAccountService {
  private allaccounts = 'http://localhost:5164/api/Account/SocialAccounts';
  private addsocialaccount = 'http://localhost:5164/api/Account/SocialAccounts';

  constructor(private http: HttpClient) { }

  // Get social accounts by user ID
  getSocialAccounts(): Observable<ISocialAccount[]> {
    return this.http.get<ISocialAccount[]>(this.allaccounts);
  }

  addaccount(account: ISocialAccount): Observable<ISocialAccount> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ISocialAccount>(this.addsocialaccount, account, { headers });
  }
}
