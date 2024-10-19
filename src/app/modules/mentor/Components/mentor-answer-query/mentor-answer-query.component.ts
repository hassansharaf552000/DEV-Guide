import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mentor-answer-query',
  templateUrl: './mentor-answer-query.component.html',
  styleUrl: './mentor-answer-query.component.css'
})
export class MentorAnswerQueryComponent {
  querymessage:any;
  QueryArray:Array<any>=[];
  values:string="";
  
  selectedFile: File | null = null;
  form: FormGroup;
  userQueries: any[] = []; 
  constructor(private http: HttpClient , private builder: FormBuilder) {
    this.form= this.builder.group(
      {
        query:["",[Validators.required]]
      }
    )

  }

  downloadFile() {
    // this.http.get('path/to/your/file.pdf', { responseType: 'blob' }).subscribe((blob) => {
    //   const url = window.URL.createObjectURL(blob);
    //   const a = document.createElement('a');
    //   a.href = url;
    //   a.download = 'my-file.pdf';
    //   document.body.appendChild(a);
    //   a.click();
    //   document.body.removeChild(a);
    //   window.URL.revokeObjectURL(url);
    // });
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

  
  send(){
   this.values=this.form.value
    console.log(this.values)
   
  }

  GetQuery(obj: any) {
     this.QueryArray.push(obj)
    }

  }