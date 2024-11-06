import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { BadgeService } from '../../../../shared/services/Badge/badge.service';

@Component({
  selector: 'app-developerlist',
  templateUrl: './developerlist.component.html',
  styleUrl: './developerlist.component.css'
})
export class DeveloperlistComponent {

  id : string;
   developerId: string | null = null;
 // developerProfile: Ideveloper | undefined;
    GetProfileURL="http://localhost:5164/api/Account/GetOneUser"
  GetReviewsURL="http://localhost:5164/api/Account/GetReview"
  //developerProfile: any;
  developerReviews: any;
  isExpanded: boolean = false;
  maxLength: number = 250; // Maximum length before "Read more" appears
  developerProfile: any = {
    About: "I am a skilled Full Stack Developer with over 5 years of experience specializing in .NET technologies. I have a strong background in building scalable web applications, working across both front-end and back-end development. On the front-end, I work with Angular and React to create dynamic, user-friendly interfaces, while on the back-end, I leverage the power of ASP.NET Core to develop robust APIs and services."
  };
  reviews: any[] = [];
  displayedReviews: any[] = [];
  reviewsLimit: number = 4; // Display only 4 reviews initially
  hasMoreReviews: boolean = false; 
  similardevelopers: any[] = [];
  showAll: boolean = false;
  maxItemsToShow: number = 2;
  Badges:any[];
  //  dateStr = "2024-02-02T00:00:00";
  //  date = new Date(this.dateStr);
  
  // formattedDate = this.date.toLocaleDateString("en-US", {
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  // });
  
  // console.log("formated",formattedDate);
  selectedSkills:any[]=this.developerProfile.Skills
  showReviewForm = false;

  handleReview(reviewData: any) {
    // Handle the review data here (e.g., send to your API)
    console.log('Review submitted:', reviewData);
    // Optionally hide the form after submission
    this.showReviewForm = false;
  }
  
  reviewForm: FormGroup;
  constructor(private route: ActivatedRoute ,private http: HttpClient,private AccService:AccountService,private fb: FormBuilder, private Badge:BadgeService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.Badge.GetUserBadge(this.id).subscribe(
      data => {
        this.Badges = data;
        console.log('badges: ', this.Badges);
        
        
      },
      error => {
        console.error('Error fetching profile', error);
      }
    );
  }

 
 
  ngOnInit(): void {
    // Get the developer ID from the URL
    const developerId = this.route.snapshot.paramMap.get('id');
console.log("developerid",developerId)
    if (developerId) {
      // Fetch developer profile
      this.AccService.getProfile(developerId).subscribe(
        data => {
          this.developerProfile = data;
          console.log('Profile: ', this.developerProfile);
          console.log("experi",this.developerProfile?.Experiences?.length);
          
        },
        error => {
          console.error('Error fetching profile', error);
        }
      );

      // Fetch developer reviews
      this.AccService.getReviews(developerId).subscribe(
        data => {
          this.developerReviews = data;
          console.log('Reviews: ', this.developerReviews);
        },
        error => {
          console.error('Error fetching reviews', error);
        }
      );
    }

    this.getReviews(developerId);
    this.AccService.getall('', 'Developer',this.developerProfile.title, 0, 0, null, 1, 3, this.selectedSkills,developerId).subscribe(developers => {
      this.similardevelopers=developers.Data;
      console.log("3-developers",developers.Data);  // This will return 3 developers with the required skills and title
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
 

  getReviews(developerId: string) {
    this.AccService.getReviews(developerId).subscribe((reviews: any[]) => {
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
    if (this.isExpanded || this.developerProfile?.About?.length <= this.maxLength) {
      return this.developerProfile?.About;
    }
    return this.developerProfile?.About?.slice(0, this.maxLength) + '...';
  }
  loaddeveloperProfile(id:string):void{
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
getStars(level: number): Array<number> {
  return Array(level).fill(0); // Creates an array with 'level' number of items
}
}
