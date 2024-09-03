import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-query-answer',
  templateUrl: './query-answer.component.html',
  styleUrl: './query-answer.component.css'
})
export class QueryAnswerComponent {
  querymessage:any;
  QueryArray:Array<any>=[];
  
  selectedFile: File | null = null;
  constructor(private http: HttpClient) {}

  downloadFile() {
    this.http.get('path/to/your/file.pdf', { responseType: 'blob' }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'my-file.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Selected file:', this.selectedFile);
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Send the file to the backend
      this.http.post('your-backend-url', formData).subscribe(response => {
        console.log('File uploaded successfully', response);
      });
    }
  }

  

  GetQuery(obj: any) {
     this.QueryArray.push(obj)
    }

  }