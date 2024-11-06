import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { BadgeService } from '../../../../shared/services/Badge/badge.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  id: string;
  // mentorId: string | null = null;
  // mentorProfile: IMentor | undefined;
  GetProfileByClaimURL = "http://localhost:5164/api/Account/GetOneUserByClaim"
  GetReviewsByClaimURL = "http://localhost:5164/api/Account/GetReviewByClaim"

  //mentorProfile: any;
  mentorReviews: any;
  isExpanded: boolean = false;
  maxLength: number = 250; // Maximum length before "Read more" appears
  mentorProfile: any = {
    //  About: "I am a skilled Full Stack Developer with over 5 years of experience specializing in .NET technologies. I have a strong background in building scalable web applications, working across both front-end and back-end development. On the front-end, I work with Angular and React to create dynamic, user-friendly interfaces, while on the back-end, I leverage the power of ASP.NET Core to develop robust APIs and services."
  };
  reviews: any[] = [];
  displayedReviews: any[] = [];
  reviewsLimit: number = 4; // Display only 4 reviews initially
  hasMoreReviews: boolean = false;
  similarMentors: any[] = [];
  showAll: boolean = false;
  maxItemsToShow: number = 2;
  selectedSkills: any[] = this.mentorProfile.Skills
  IsInList: any[];
  Badges:any[];
  showMessage = true; // Controls the visibility of the message
  showMessageapproval=true;
  Messagerejection=true;
  constructor(private route: ActivatedRoute, private http: HttpClient, private AccService: AccountService,private Badge:BadgeService) {
    this.Badge.GetMyBadge().subscribe(
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
    // Get the mentor ID from the URL
    const mentorId = this.route.snapshot.paramMap.get('id');

    console.log("mentorid", mentorId)
    //  if (mentorId) {
    // Fetch mentor profile
    this.AccService.getProfileByClaim().subscribe(
      data => {
        this.mentorProfile = data;
        console.log('Profile: ', this.mentorProfile);
        console.log("experi", this.mentorProfile?.Experiences?.length);
        if (this.mentorProfile?.ID) {
          this.isinlist(this.mentorProfile.ID);
        }

      },
      error => {
        console.error('Error fetching profile', error);
      }
    );

    // Fetch mentor reviews
    this.AccService.getReviewsByClaim().subscribe(
      data => {
        this.mentorReviews = data;
        console.log('Reviews: ', this.mentorReviews);
      },
      error => {
        console.error('Error fetching reviews', error);
      }
    );
    //  }

    this.getReviews();
    this.AccService.getall('', 'Mentor', this.mentorProfile.title, 0, 0, null, 1, 3, this.selectedSkills, mentorId).subscribe(mentors => {
      this.similarMentors = mentors.Data;
      //  console.log("3-mentors",mentors.Data);  // This will return 3 mentors with the required skills and title
    });

    const messageHidden = localStorage.getItem('messageHiddenmentor');
    this.showMessage = messageHidden !== 'true';
    const messageHiddenaprroval = localStorage.getItem('messageHiddenapprovalmentor');
    this.showMessageapproval = messageHiddenaprroval !== 'true';
    const hideMessagerejection = localStorage.getItem('hideMessagerejectionmentor');
    this.Messagerejection = hideMessagerejection !== 'true';

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

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  //  get displayText(): string {
  //    if (this.isExpanded || this.mentorProfile.About.length <= this.maxLength) {
  //      return this.mentorProfile.About;
  //    }
  //    return this.mentorProfile.About.slice(0, this.maxLength) + '...';
  //  }
  get displayText(): string {
    if (!this.mentorProfile || !this.mentorProfile.About) {
      return '';  // Return empty string if mentorProfile or About is undefined
    }

    if (this.isExpanded || this.mentorProfile?.About?.length <= this.maxLength) {
      return this.mentorProfile.About;
    }

    return this.mentorProfile.About.slice(0, this.maxLength) + '...';
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


  public isMentorInList: boolean = false;

  isinlist(id: string) {
    this.AccService.IsInList().subscribe(
      data => {
        this.IsInList = data;
        console.log('listids: ', this.IsInList);
        console.log("mentorId", id);
        this.isMentorInList = this.IsInList.includes(id);
        console.log("iftrue???", this.isMentorInList); // Set flag here
      },
      error => {
        console.error('Error fetching profile', error);
      }
    );
  }
  getStars(level: number): Array<number> {
    return Array(level).fill(0); // Creates an array with 'level' number of items
  }
  
  hideMessage(): void {
    // Hide the message and set a flag in localStorage
    this.showMessage = false;
    localStorage.setItem('messageHiddenmentor', 'true');
  }
  hideMessageaprroval(): void {
    // Hide the message and set a flag in localStorage
    this.showMessageapproval = false;
    localStorage.setItem('messageHiddenapprovalmentor', 'true');
  }
  hideMessagerejection(): void {
    // Hide the message and set a flag in localStorage
    this.Messagerejection = false;
    localStorage.setItem('hideMessagerejectionmentor', 'true');
  }
}
