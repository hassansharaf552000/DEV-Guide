import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { SessionService } from '../../../../shared/services/Session/session.service';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-developer-session-details',
  templateUrl: './developer-session-details.component.html',
  styleUrl: './developer-session-details.component.css'
})
export class DeveloperSessionDetailsComponent {
  id: string;
  sessiondetails: any;
  feedbackForm: FormGroup;
  MeetingLinkForm: FormGroup;
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  showReviewForm = false;
  handleReview(reviewData: any) {
    // Handle the review data here (e.g., send to your API)
    console.log('Review submitted:', reviewData);
    // Optionally hide the form after submission
    this.showReviewForm = false;
  }



  reviewForm: FormGroup;
  constructor(private route: ActivatedRoute ,
    private sessionserc : SessionService , private http: HttpClient ,private formBuilder: FormBuilder,private toastr: ToastrService){

    this.id = this.route.snapshot.paramMap.get('id');
   
    this.MeetingLinkForm = this.formBuilder.group({
      feedback: ['', Validators.required]
    });
    this.feedbackForm = this.formBuilder.group({
      feedback: ['', Validators.required]
    });
    this.reviewForm = this.formBuilder.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    });

    this.reviewForm = this.formBuilder.group({
      rating: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  
 
  // onSubmit() {
  //   if (this.reviewForm.valid) {
  //     // Handle form submission (e.g., send to API)
  //     console.log(this.reviewForm.value);
  //   }
  // }


  
  ngOnInit(): void {
    // Get the mentor ID from the URL
   
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("sessionid", this.id )
    if (this.id ) {
      // Fetch mentor profile
      this.sessionserc.getSessionById(this.id ).subscribe(
        data => {
          this.sessiondetails = data;
          console.log('session: ', this.sessiondetails);
          

        },
        error => {
          console.error('Error fetching session', error);
        }
      );

  
    }

  
  }


  onSubmit() {
    if (this.reviewForm.valid) {
      const reviewData = {
        Rate: this.reviewForm.value.rating,
        // ReviewDate: new Date(),
        Description: this.reviewForm.value.comment
      };

      this.sessionserc.addreview(reviewData,+this.id).subscribe({
        next: (response) => {
          this.toastr.success('Review added successfully', (response as any).message);
          this.showReviewForm = false;
          this.reviewForm.reset();
        },
        error: (error) => {
          this.toastr.error('Failed to add review', error?.error?.Message);
          console.error(error);
        }
      });
    }
  }
  onSubmitFeedback() {
   
    const feedback = this.feedbackForm.value.feedback; // Ensure you are accessing the correct property

    console.log("Feedback to be sent:", feedback); 
      this.sessionserc.updateFeedback(this.id,feedback).subscribe({

        next: (res: any) => {
          console.log("res",res);
    
    
          this.toastr.success('Message is succeed', res.message);
    
    
        },
    
        error: (err) => {
          console.log(err);
           this.toastr.error('Message is failed', err.error.message);
        }
      });}


      onSubmitMeetingLink() {
   
        const feedback = this.MeetingLinkForm.value.feedback; // Ensure you are accessing the correct property
    
        console.log("Feedback to be sent:", feedback); 
          this.sessionserc.UpdateMeeting(this.id,feedback).subscribe({
    
            next: (res: any) => {
              console.log("res",res);
        
        
              this.toastr.success('Message is succeed', res.message);
        
        
            },
        
            error: (err) => {
              console.log(err);
               this.toastr.error('Message is failed', err.error.message);
            }
          });}

  downloadPDF() {
    const content = this.contentToConvert.nativeElement;
    html2canvas(content, {
      backgroundColor: null, 
      scale: 2,
      logging: true, 
      useCORS: true 
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');  

      const imgWidth = 210; 
      const pageHeight = 295; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Session-Details.pdf');
    });
  }
}
