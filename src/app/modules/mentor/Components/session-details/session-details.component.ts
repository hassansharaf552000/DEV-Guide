import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import { SessionService } from '../../../../shared/services/Session/session.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrl: './session-details.component.css'
})
export class SessionDetailsComponent {
  id: string;
  sessiondetails: any;
  feedbackForm: FormGroup;
  MeetingLinkForm: FormGroup;
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  constructor(private route: ActivatedRoute ,
    private sessionserc : SessionService , private http: HttpClient ,private formBuilder: FormBuilder,private toastr: ToastrService){

    this.id = this.route.snapshot.paramMap.get('id');
    this.MeetingLinkForm = this.formBuilder.group({
      feedback: ['', Validators.required]
    });
    this.feedbackForm = this.formBuilder.group({
      feedback: ['', Validators.required]
    });
  }



  
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
    onSubmitFeedbackForCancel() {
   
      const feedback = this.feedbackForm.value.feedback; // Ensure you are accessing the correct property
  
      console.log("Feedback to be sent:", feedback); 
        this.sessionserc.UpdateFeedbackForCanceled(this.id,feedback).subscribe({
  
          next: (res: any) => {
            console.log("res",res);
      
      
            this.toastr.success('Message is succeed', res?.message);
      
      
          },
      
          error: (err) => {
            console.log(err);
             this.toastr.error('Message is failed', err?.error?.message);
          }
        });}
  

   // This will return 3 mentors with the required skills and title
   

    //     const dateStr = "2024-02-02T00:00:00";
    // const date = new Date(dateStr);

    // const formattedDate = date.toLocaleDateString("en-US", {
    //   year: "numeric",
    //   month: "long",
    //   day: "numeric",
    // });

    // console.log("formated",formattedDate);
  
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
  // onSubmitFeedback() {
  //   if (this.feedbackForm.invalid) {
  //     console.log("Form is invalid", this.feedbackForm.errors);
  //     return; // Prevent submission if the form is invalid
  //   }
  
  //   const feedback = this.feedbackForm.value.feedback;
  //   console.log("Feedback to be sent:", feedback); 
  
  //   this.sessionserc.updateFeedback(this.id, feedback).subscribe({
  //     next: (res: any) => {
  //       console.log("Response:", res);
  //       this.toastr.success('Feedback submitted successfully!', res.message);
  //     },
  //     error: (err) => {
  //       console.error('Error submitting feedback:', err);
  //       this.toastr.error('Failed to submit feedback.', err.error.message || 'Unknown error');
  //     }
  //   });
  // }
  
  //   if (this.feedbackForm.invalid) {
  //     return;
  //   }

  //   const feedback = this.feedbackForm.get('feedback')?.value;
  //   this.sessionserc.updateFeedback(this.id, feedback).subscribe(
  //     response => {
  //       console.log('Feedback updated successfully', response);
  //     },
  //     error => {
  //       console.error('Error updating feedback', error);
  //     }
  //   );
  // }
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
