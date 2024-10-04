import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-session-datails',
  templateUrl: './session-details.component.html',
  styleUrl: './session-details.component.css'
})
export class SessionDatailsComponent {
  @ViewChild('contentToConvert') contentToConvert!: ElementRef;
  constructor(){}
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
