import { Component, ElementRef, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';  // Correct import for jsPDF
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent {
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;

  constructor() {}

  downloadAsPDF() {
    const content = this.contentToConvert.nativeElement;

    // Use html2canvas to capture the content
    html2canvas(content, {
      backgroundColor: null, // Set to null to avoid forcing a white background, which may cause gray areas
      scale: 2, // Increase the scale for better resolution in the PDF
      logging: true, // Optional: Enable logging for debugging
      useCORS: true // Enable cross-origin images if necessary
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');  // Correctly instantiate jsPDF in portrait (p), mm, and A4 format

      const imgWidth = 210; // A4 page width in mm
      const pageHeight = 295; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add the image to the PDF (starting on the first page)
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add new pages if content exceeds one page
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
