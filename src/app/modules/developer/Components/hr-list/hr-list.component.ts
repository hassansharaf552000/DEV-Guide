import { ChangeDetectorRef, Component, Inject, PLATFORM_ID } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { isPlatformBrowser } from '@angular/common';
import { Options, LabelType } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-hr-list',
  templateUrl: './hr-list.component.html',
  styleUrl: './hr-list.component.css'
})
export class HRListComponent {

  name: string = ""; 
  role: string = ""; 
  title: string = "";
  // priceMin: number = 0;
  // priceMax: number = 0;
  rate: number;            // Declare rate as number
  p: number = 1;           // Current page number
  pageSize: number = 5;    // Default page size
  HRs: any[] = [];
  totalItems: number;
  
  // minValue: number = 100;
  // maxValue: number = 400;
  priceMin: number =0;
  priceMax: number =0;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$ <b>Min</b>" + value;
        case LabelType.High:
          return "$ <b>Max</b>" + value;
         default:
          return ""
        //   return "E£" + value;
      }
    }
  };
  isBrowser: boolean = false;

  constructor(private AccountServ: AccountService, private cdr: ChangeDetectorRef,@Inject(PLATFORM_ID) private platformId: Object) {
    this.filter(); // Initial data fetch
  }

  ngOnInit(): void {
    // Check if the code is running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);

    // Initialize ngx-slider options only if it's running in the browser
    if (this.isBrowser) {
      // this.options = {
      //   floor: 0,
      //   ceil: 100,
      //   step: 1
      // };
    }
  }
  // Fetch HRs based on filters and pagination
  filter(): void {
    if(this.priceMin==0&&this.priceMax>0){
      this.priceMin=1
    }else{
      this.priceMin=0
    }
    console.log("Selected Rate:", this.rate); // Debugging line to check selected rate value
    this.AccountServ.getall(this.name, "HR", this.title, this.priceMin, this.priceMax, this.rate, this.p, this.pageSize)
      .subscribe({
        next: (res: any) => {
          this.HRs = res.Data as any[];
          this.totalItems = res.TotalCount;
          this.pageSize = res.PageSize;
          console.log("Filtered data:", res.Data);
          if (res?.Data?.SocialAccounts && res?.Data?.SocialAccounts?.length > 0) {

            res.Data.SocialAccounts.forEach(account => {
                console.log(account.SocialLink); // Make sure 'account' is not undefined
            });
        
          }
 
          this.cdr.detectChanges();
        }
      });
      
  }

  // Calculate total number of pages
  totalPge(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }

  
  // Method to handle page change
  OnpageChange(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPge()) {
      this.p = newPage; // Update current page number
      this.filter();    // Fetch data for the new page
    }
  }



  onPriceMinChange(newMinValue: number): void {
    this.priceMin = newMinValue;
    console.log('Updated Price Min:', this.priceMin);
  }

  onPriceMaxChange(newMaxValue: number): void {
    this.priceMax = newMaxValue;
    console.log('Updated Price Max:', this.priceMax);
  }
  
 r
}

