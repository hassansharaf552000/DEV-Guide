import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { IMentor } from '../../../../core/enums/Mentor';
import { getLocaleEraNames } from '@angular/common';
import { FormControl } from '@angular/forms';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { Options, LabelType } from "@angular-slider/ngx-slider";
@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrl: './mentor-list.component.css'
})
// export class MentorListComponent {
//   price: number = 10;
//   // mentors: IMentor[] = []; // Initialize with an empty array4
//   name:string=""; 
//   role:string=""; 
//   title:string="";
//   priceMin:number=0;
//   priceMax:number=0;
//   rate:any;
//   page:number=1;
//   pageSize:number;
//   mentors:any[]=[];
//   p: number ;
//   collection: any[] = this.mentors;  
//   totalItems:number;
//   constructor(private AccountServ:AccountService){
//      this.AccountServ.getall(this.name,this.role,this.title,this.priceMin,this.priceMax,this.rate,this.p,this.pageSize).subscribe((res: any) => {
//       // this.mentors = res.Data as any[];
//        this.mentors = res.Data as 
//        any[];
//        this.totalItems=res.TotalCount
//        this.pageSize=res.PageSize
//       //  this.p=res.PageNumber
//       console.log("res=",res);})
//      }
  
  
      
      
//   //     console.log("hello");
     

//   // }
//   ngOnInit():void {
//     this.filter();
//   }

//   // priceMin: number = 100;
//   // priceMax: number = 10000;
//   updateRange(): void {
//     if (this.priceMin > this.priceMax) {
//       const temp = this.priceMin;
//       this.priceMin = this.priceMax;
//       this.priceMax = temp;
//     }
//   }
//   // filter():any[]{
//   //  this.AccountServ.getall(this.name,this.role,this.title,
//   //     this.priceMin,this.priceMax,this.rate,this.p,this.pageSize).subscribe(
//   //       (res:any)=>{ this.mentors=res.Data as any[];
//   //         console.log(res);
//   // });
//   //   return this.mentors
//   // }
//   filter():void{
//     this.AccountServ.getall(this.name,this.role,this.title,
//        this.priceMin,this.priceMax,this.rate,this.p,this.pageSize).subscribe({next:(res:any)=>this.mentors=res.Data as any[]})
//         //  (res:any)=>{ this.mentors=res.Data as any[];
//         //    console.log(res);
//   //  });
    
//    }
//   getRangeMinPercent(): number {
//     return ((this.priceMin - 100) / (10000 - 100)) * 100;
//   }

//   getRangeMaxPercent(): number {
//     return ((this.priceMax - 100) / (10000 - 100)) * 100;
//   }

//   getRangeWidthPercent(): number {
//     return this.getRangeMaxPercent() - this.getRangeMinPercent();
//   }
 
//   totalPge():number{
// return Math.ceil(this.totalItems/this.pageSize)
//   }
//   OnpageChange(newpage:number):void{
//     if(newpage>0&&newpage<=this.totalPge()){
//       this.p=newpage;
//       this.filter();
// console.log("myresssss",this.filter())
//     }

//   }
// }
  

// this os the final 

// export class MentorListComponent {
//   name: string = ""; 
//   role: string = ""; 
//   title: string = "";
//   priceMin: number = 0;
//   priceMax: number = 0;
//   rate: any;
//   p: number = 1;          // Ensure this is initialized
//   pageSize: number = 10;   // Default page size
//   mentors: any[] = [];
//   totalItems: number;

//   constructor(private AccountServ: AccountService,private cdr: ChangeDetectorRef) {
//     // Fetch initial data for page 1
//     // this.AccountServ.getall()
//     // .subscribe({
//     //   next: (res: any) => {
//     //     this.mentors = res
//     //     console.log("resssss",res);
        
//     //   }
//     // });
//      this.filter();
//   }

//   // Fetch mentors based on filters and pagination
//   // // this is the final one 
//   filter(): void {
//     this.AccountServ.getall(this.name, this.role, this.title, this.priceMin, this.priceMax, this.rate, this.p, this.pageSize)
//       .subscribe({
//         next: (res: any) => {
//           this.mentors = res.Data as any[];
//           this.totalItems = res.TotalCount;
//           this.p = res.PageSize;
//           console.log("Filtered data:", res.Data);
//           this.cdr.detectChanges();
//         }
//       });
//   }
//   // Calculate the total number of pages
//   totalPge(): number {
//     return Math.ceil(this.totalItems / this.pageSize);
//   }
//   // Method to handle page change
//   OnpageChange(newPage: number): void {
//     console.log('Page changed to:', newPage); // Debugging line
//     if (newPage > 0 && newPage <= this.totalPge()) {
//       this.p = newPage; // Update the current page number
//       this.filter();
//       console.log('Mentors:', this.mentors);
//        // Fetch data for the new page

//     }
//   }


// }
export class MentorListComponent {
  name: string = ""; 
  role: string = ""; 
  title: string = "";
  priceMin: number = 0;
  priceMax: number = 0;
  rate: number;            // Declare rate as number
  p: number = 1;           // Current page number
  pageSize: number = 5;    // Default page size
  mentors: any[] = [];
  totalItems: number;

  constructor(private AccountServ: AccountService, private cdr: ChangeDetectorRef) {
    this.filter(); // Initial data fetch
  }

  // Fetch mentors based on filters and pagination
  filter(): void {
    console.log("Selected Rate:", this.rate); // Debugging line to check selected rate value
    this.AccountServ.getall(this.name, this.role, this.title, this.priceMin, this.priceMax, this.rate, this.p, this.pageSize)
      .subscribe({
        next: (res: any) => {
          this.mentors = res.Data as any[];
          this.totalItems = res.TotalCount;
          this.pageSize = res.PageSize;
          console.log("Filtered data:", res.Data[0]);
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



  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
}

