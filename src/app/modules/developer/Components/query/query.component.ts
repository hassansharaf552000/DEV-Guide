import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  querymessage:any;
  QueryArray:Array<any>=[];
  
  selectedFile: File | null = null;
  constructor(private http: HttpClient) {}

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