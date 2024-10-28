import { Component } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hr-profile',
  templateUrl: './hr-profile.component.html',
  styleUrl: './hr-profile.component.css'
})
export class HrProfileComponent {
//   //hrProfile: IHR | undefined;

//   id : string;
//    hrId: string | null = null;
//  // hrProfile: IMentor | undefined;
//     GetProfileURL="http://localhost:5164/api/Account/GetOneUser"
//   GetReviewsURL="http://localhost:5164/api/Account/GetReview"
//   //mentorProfile: any;
//   hrReviews: any;
//   isExpanded: boolean = false;
//   maxLength: number = 250; // Maximum length before "Read more" appears
//   hrProfile: any = {
//     // About: "I am a skilled Full Stack Developer with over 5 years of experience specializing in .NET technologies. I have a strong background in building scalable web applications, working across both front-end and back-end development. On the front-end, I work with Angular and React to create dynamic, user-friendly interfaces, while on the back-end, I leverage the power of ASP.NET Core to develop robust APIs and services."
//   };
//   reviews: any[] = [];
//   displayedReviews: any[] = [];
//   reviewsLimit: number = 4; // Display only 4 reviews initially
//   hasMoreReviews: boolean = false; 
//   similarHrs: any[] = [];
//   showAll: boolean = false;
//   maxItemsToShow: number = 2;
//   //  dateStr = "2024-02-02T00:00:00";
//   //  date = new Date(this.dateStr);
  
//   // formattedDate = this.date.toLocaleDateString("en-US", {
//   //   year: "numeric",
//   //   month: "long",
//   //   day: "numeric",
//   // });
  
//   // console.log("formated",formattedDate);
//   selectedSkills:any[]=this.hrProfile.Skills
//   constructor(private route: ActivatedRoute ,private http: HttpClient,private AccService:AccountService) {
   
//   }

//   // ngOnInit(): void {
//   //   this.hrId = this.route.snapshot.paramMap.get('id');
//   //   // this.loadhr();
//   //   this.gethrProfile
//   //   this.
//   // }

//   // gethrProfile() {
//   //   this.http.get(`${this.GetProfileURL}/${this.hrId}`)
//   //     .subscribe(response => {
//   //       this.hrProfile = response;
//   //     }, error => {
//   //       console.log("hr not found", error);
//   //     });
//   // }

//   // gethrReviews() {
//   //   this.http.get(`${this.GetReviewsURL}/${this.hrId}`)
//   //     .subscribe(response => {
//   //       this.hrReviews = response;
//   //     }, error => {
//   //       console.log("hr reviews not found", error);
//   //     });
//   // }
//   // loadhr() {
//   //   this.AccService.gethrById(this.id).subscribe(
//   //     (data: any) => {
//   //       this.hrProfile = data;
//   //     },
//   //     (error) => {
//   //       console.error('Error fetching hr', error);
//   //     }
//   //   );
//   // }
 
//   ngOnInit(): void {
//     // Get the hr ID from the URL
//     const hrId = this.route.snapshot.paramMap.get('id');
// console.log("hrid",hrId)
//     if (hrId) {
//       // Fetch hr profile
//       this.AccService.getProfile(hrId).subscribe(
//         data => {
//           this.hrProfile = data;
//           console.log('Profile: ', this.hrProfile);
//           console.log("experi",this.hrProfile.Experiences.length);
          
//         },
//         error => {
//           console.error('Error fetching profile', error);
//         }
//       );

//       // Fetch hr reviews
//       this.AccService.getReviews(hrId).subscribe(
//         data => {
//           this.hrReviews = data;
//           console.log('Reviews: ', this.hrReviews);
//         },
//         error => {
//           console.error('Error fetching reviews', error);
//         }
//       );
//     }

//     this.getReviews(hrId);
//     this.AccService.getall('', 'HR',this.hrProfile.title, 0, 0, null, 1, 3, this.selectedSkills,hrId).subscribe(hrs => {
//       this.similarHrs=hrs.Data;
//       console.log("3-hrs",hrs.Data);  // This will return 3 hrs with the required skills and title
//     });

// //     const dateStr = "2024-02-02T00:00:00";
// // const date = new Date(dateStr);

// // const formattedDate = date.toLocaleDateString("en-US", {
// //   year: "numeric",
// //   month: "long",
// //   day: "numeric",
// // });

// // console.log("formated",formattedDate);
//   }
//   formatDate(dateString: string): string {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   }
//   canLoadLess: boolean = false;
//   // getReviews(hrId: string) {
//   //   this.AccService.getReviews(hrId).subscribe((reviews: any[]) => {
//   //     this.reviews = reviews;
//   //     this.updateDisplayedReviews();
//   //   });
//   // }

//   // updateDisplayedReviews() {
//   //   this.displayedReviews = this.reviews.slice(0, this.reviewsLimit);
//   //   this.hasMoreReviews = this.reviews.length > this.reviewsLimit;
//   // }

//   // loadMoreReviews() {
//   //   this.reviewsLimit += 4; // Increment the limit by 4 to load more reviews
//   //   this.updateDisplayedReviews();
//   // }
//   // getReviews(hrId: string) {
//   //   this.AccService.getReviews(hrId).subscribe((reviews: any[]) => {
//   //     this.reviews = reviews;
//   //     this.updateDisplayedReviews();
//   //   });
//   // }

//   getReviews(hrId: string) {
//     this.AccService.getReviews(hrId).subscribe((reviews: any[]) => {
//       // Sort the reviews by date in descending order (most recent first)
//       this.reviews = reviews.sort((a, b) => new Date(b.ReviewDate).getTime() - new Date(a.ReviewDate).getTime());
//       this.updateDisplayedReviews();
//     });
//   }


//   updateDisplayedReviews() {
//     this.displayedReviews = this.reviews.slice(0, this.reviewsLimit);
//     this.hasMoreReviews = this.reviews.length > this.reviewsLimit;
//     this.canLoadLess = this.reviewsLimit > 4;  // Show "Load Less" if more than 4 reviews are displayed
//   }

//   loadMoreReviews() {
//     this.reviewsLimit += 4;  // Increment the limit by 4 to load more reviews
//     this.updateDisplayedReviews();
//   }
//   loadLessReviews() {
//     this.reviewsLimit = Math.max(this.reviewsLimit - 4, 4);  // Decrease the limit but not below the initial value (4)
//     this.updateDisplayedReviews();
//   }
//   // public showReadMore(aboutText: string): boolean {
//   //   const maxLength = 300; // You can adjust this number to match the number of characters that fit in 2-3 lines.
//   //   return aboutText.length > maxLength;
//   // }
//   toggleExpand() {
//     this.isExpanded = !this.isExpanded;
//   }

//   get displayText(): string {
//     if (this.isExpanded || this.hrProfile.About.length <= this.maxLength) {
//       return this.hrProfile.About;
//     }
//     return this.hrProfile.About.slice(0, this.maxLength) + '...';
//   }
//   loadhrProfile(id:string):void{
//     // const hrlist:IMentor[]=[
//     //   {
//     //     id: s,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]     },
//     //   {
//     //     id: 2,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]
//     //   },
//     //   {
//     //     id: 3,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]
//     //   },
//     //   {
//     //     id:4,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]
//     //   },
//     //   {
//     //     id:5,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]
//     //   },
//     //   {
//     //     id:6,
//     //     FirstName: 'Alice',
//     //     LastName:'Johnson',
//     //     Image: 'https://via.placeholder.com/150',
//     //      category: 'Machine Learning',
//     //     Title: 'Machine Learning Engineer',
//     //     AverageRate: 3,
//     //     Price: 199.99,
//     //     YearsOfExperience:5,
//     //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
//     //    Skills: ['Front End', 'UI/UX'],
//     //    SocialAccounts:[]
//     //   }
//     // ];
//     // this.mentorProfile = mentorlist.find(mentor=> mentor.id === id);
//   }



// //   ngOnInit(): void {
// //     this.id = this.route.snapshot.paramMap.get('id')!;
// //     this.loadMentorProfile(Number(this.id));
// //   }

// //   loadMentorProfile(id: number): void {
// //     this.getMentorById(id).subscribe(
// //       (mentor: IMentor) => {
// //         this.mentorProfile = mentor;
// //       },
// //       (error) => {
// //         console.error('Error fetching mentor data:', error);
// //       }
// //     );
// //   }

// //   // Method to fetch mentor data by ID
// //   getMentorById(id: number): Observable<IMentor> {
// //     // const apiUrl = http://localhost:5164/api/Account/AddQuery/${id};
// //     return this.httpClient.get<IMentor>(apiUrl);
// //   }

// getYearFromDate(dateString: string): number {
//   const date = new Date(dateString);
//   return date.getFullYear();
// }
// toggleShowAll() {
//   this.showAll = !this.showAll;
// }

// getLimitedEducations(educations: any[]) {
//   if (!educations) {
//     return []; // Return an empty array if educations is undefined
//   }
//   return this.showAll ? educations : educations.slice(0, this.maxItemsToShow);
// }
// getLimitedExperiences(experiences: any[]) {
//   if (!experiences) {
//     return []; // Return an empty array if educations is undefined
//   }
//   return this.showAll ? experiences : experiences.slice(0, this.maxItemsToShow);
// }
// trackByFunction(index: number, education: any): string {
//   return education.Degree; // or any unique identifier
// }
// }

  id : string;
   hrId: string | null = null;
 // hrProfile: Ihr | undefined;
    GetProfileURL="http://localhost:5164/api/Account/GetOneUser"
  GetReviewsURL="http://localhost:5164/api/Account/GetReview"
  //hrProfile: any;
  hrReviews: any;
  isExpanded: boolean = false;
  maxLength: number = 250; // Maximum length before "Read more" appears
  hrProfile: any = {
    About: "I am a skilled Full Stack Developer with over 5 years of experience specializing in .NET technologies. I have a strong background in building scalable web applications, working across both front-end and back-end development. On the front-end, I work with Angular and React to create dynamic, user-friendly interfaces, while on the back-end, I leverage the power of ASP.NET Core to develop robust APIs and services."
  };
  reviews: any[] = [];
  displayedReviews: any[] = [];
  reviewsLimit: number = 4; // Display only 4 reviews initially
  hasMoreReviews: boolean = false; 
  similarHRs: any[] = [];
  showAll: boolean = false;
  maxItemsToShow: number = 2;
  //  dateStr = "2024-02-02T00:00:00";
  //  date = new Date(this.dateStr);
  
  // formattedDate = this.date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  
  // console.log("formated",formattedDate);
  selectedSkills:any[]=this.hrProfile.Skills
  showReviewForm = false;

  handleReview(reviewData: any) {
    // Handle the review data here (e.g., send to your API)
    console.log('Review submitted:', reviewData);
    // Optionally hide the form after submission
    this.showReviewForm = false;
  }
  
  reviewForm: FormGroup;
  constructor(private route: ActivatedRoute ,private http: HttpClient,private AccService:AccountService,private fb: FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

 
 
  ngOnInit(): void {
    // Get the hr ID from the URL
    const hrId = this.route.snapshot.paramMap.get('id');
console.log("hrid",hrId)
    if (hrId) {
      // Fetch hr profile
      this.AccService.getProfile(hrId).subscribe(
        data => {
          this.hrProfile = data;
          console.log('Profile: ', this.hrProfile);
          console.log("experi",this.hrProfile?.Experiences?.length);
          
        },
        error => {
          console.error('Error fetching profile', error);
        }
      );

      // Fetch hr reviews
      this.AccService.getReviews(hrId).subscribe(
        data => {
          this.hrReviews = data;
          console.log('Reviews: ', this.hrReviews);
        },
        error => {
          console.error('Error fetching reviews', error);
        }
      );
    }

    this.getReviews(hrId);
    this.AccService.getall('', 'HR',this.hrProfile.title, 0, 0, null, 1, 3, this.selectedSkills,hrId).subscribe(hrs => {
      this.similarHRs=hrs.Data;
      console.log("3-hrs",hrs.Data);  // This will return 3 hrs with the required skills and title
    });


  }
  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  canLoadLess: boolean = false;
 

  getReviews(hrId: string) {
    this.AccService.getReviews(hrId).subscribe((reviews: any[]) => {
      // Sort the reviews by date in descending order (most recent first)
      this.reviews = reviews.sort((a, b) => new Date(b.ReviewDate).getTime() - new Date(a.ReviewDate).getTime());
      this.updateDisplayedReviews();
    });
  }


  updateDisplayedReviews() {
    this.displayedReviews = this.reviews?.slice(0, this.reviewsLimit);
    this.hasMoreReviews = this.reviews?.length > this.reviewsLimit;
    this.canLoadLess = this.reviewsLimit > 4;  // Show "Load Less" if more than 4 reviews are displayed
  }

  loadMoreReviews() {
    this.reviewsLimit += 4;  // Increment the limit by 4 to load more reviews
    this.updateDisplayedReviews();
  }
  loadLessReviews() {
    this.reviewsLimit = Math.max(this.reviewsLimit - 4, 4);  // Decrease the limit but not below the initial value (4)
    this.updateDisplayedReviews();
  }
  // public showReadMore(aboutText: string): boolean {
  //   const maxLength = 300; // You can adjust this number to match the number of characters that fit in 2-3 lines.
  //   return aboutText.length > maxLength;
  // }
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  get displayText(): string {
    if (this.isExpanded || this.hrProfile?.About?.length <= this.maxLength) {
      return this.hrProfile?.About;
    }
    return this.hrProfile?.About?.slice(0, this.maxLength) + '...';
  }
  loadHRProfile(id:string):void{
  }

getYearFromDate(dateString: string): number {
  const date = new Date(dateString);
  return date.getFullYear();
}
toggleShowAll() {
  this.showAll = !this.showAll;
}

getLimitedEducations(educations: any[]) {
  if (!educations) {
    return []; // Return an empty array if educations is undefined
  }
  return this.showAll ? educations : educations?.slice(0, this.maxItemsToShow);
}
getLimitedExperiences(experiences: any[]) {
  if (!experiences) {
    return []; // Return an empty array if educations is undefined
  }
  return this.showAll ? experiences : experiences?.slice(0, this.maxItemsToShow);
}
trackByFunction(index: number, education: any): string {
  return education.Degree; // or any unique identifier
}
}