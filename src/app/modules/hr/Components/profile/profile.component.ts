import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  id : string;
  // hrId: string | null = null;
// hrProfile: Ihr | undefined;
GetProfileByClaimURL="http://localhost:5164/api/Account/GetOneUserByClaim"
GetReviewsByClaimURL="http://localhost:5164/api/Account/GetReviewByClaim"

 //hrProfile: any;
 hrReviews: any;
 isExpanded: boolean = false;
 maxLength: number = 250; // Maximum length before "Read more" appears
 hrProfile: any = {
  //  About: "I am a skilled Full Stack Developer with over 5 years of experience specializing in .NET technologies. I have a strong background in building scalable web applications, working across both front-end and back-end development. On the front-end, I work with Angular and React to create dynamic, user-friendly interfaces, while on the back-end, I leverage the power of ASP.NET Core to develop robust APIs and services."
 };
 reviews: any[] = [];
 displayedReviews: any[] = [];
 reviewsLimit: number = 4; // Display only 4 reviews initially
 hasMoreReviews: boolean = false; 
 similarHRs: any[] = [];
 showAll: boolean = false;
 maxItemsToShow: number = 2;
 selectedSkills:any[]=this.hrProfile.Skills
 constructor(private route: ActivatedRoute ,private http: HttpClient,private AccService:AccountService) {
  
 }


 ngOnInit(): void {
   // Get the hr ID from the URL
   const hrId = this.route.snapshot.paramMap.get('id');
console.log("hrid",hrId)
  //  if (hrId) {
     // Fetch hr profile
     this.AccService.getProfileByClaim().subscribe(
       data => {
         this.hrProfile = data;
         console.log('Profile: ', this.hrProfile);
         console.log("experi",this.hrProfile.Experiences.length);
         
       },
       error => {
         console.error('Error fetching profile', error);
       }
     );

     // Fetch hr reviews
     this.AccService.getReviewsByClaim().subscribe(
       data => {
         this.hrReviews = data;
         console.log('Reviews: ', this.hrReviews);
       },
       error => {
         console.error('Error fetching reviews', error);
       }
     );
  //  }

   this.getReviews();
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

 getReviews() {
   this.AccService.getReviewsByClaim().subscribe((reviews: any[]) => {
     // Sort the reviews by date in descending order (most recent first)
     this.reviews = reviews.sort((a, b) => new Date(b.ReviewDate).getTime() - new Date(a.ReviewDate).getTime());
     this.updateDisplayedReviews();
   });
 }


 updateDisplayedReviews() {
   this.displayedReviews = this.reviews.slice(0, this.reviewsLimit);
   this.hasMoreReviews = this.reviews.length > this.reviewsLimit;
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

 toggleExpand() {
   this.isExpanded = !this.isExpanded;
 }

//  get displayText(): string {
//    if (this.isExpanded || this.hrProfile.About.length <= this.maxLength) {
//      return this.hrProfile.About;
//    }
//    return this.hrProfile.About.slice(0, this.maxLength) + '...';
//  }
 get displayText(): string {
  if (!this.hrProfile || !this.hrProfile.About) {
    return '';  // Return empty string if hrProfile or About is undefined
  }

  if (this.isExpanded || this.hrProfile.About.length <= this.maxLength) {
    return this.hrProfile.About;
  }

  return this.hrProfile.About.slice(0, this.maxLength) + '...';
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
 return this.showAll ? educations : educations.slice(0, this.maxItemsToShow);
}
getLimitedExperiences(experiences: any[]) {
 if (!experiences) {
   return []; // Return an empty array if educations is undefined
 }
 return this.showAll ? experiences : experiences.slice(0, this.maxItemsToShow);
}
trackByFunction(index: number, education: any): string {
 return education.Degree; // or any unique identifier
}

}
