import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';  // Correct import for jsPDF
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../../shared/services/Session/session.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent {
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  SsessionID="";
  sessiondetails: any;
  constructor(private route: ActivatedRoute,private sessionserc : SessionService) {



    this.SsessionID = this.route.snapshot.paramMap.get('id');
    if (this.SsessionID) {
      console.log(' mentor ID provided in the route',this.SsessionID);
      // Handle the error, for example, navigate to an error page or show a message
    }
  }
  ngOnInit(): void {
    // Get the mentor ID from the URL
   
    this.SsessionID = this.route.snapshot.paramMap.get('id');
    console.log("sessionid", this.SsessionID )
    if (this.SsessionID ) {
      // Fetch mentor profile
      this.sessionserc.getSessionById(this.SsessionID ).subscribe(
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

  downloadAsPDF() {
    const content = this.contentToConvert.nativeElement;

    // Use html2canvas to capture the content
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

      // Save the PDF
      pdf.save('booking-confirmation.pdf');
    });
  }
}
