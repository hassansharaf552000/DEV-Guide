import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from '../../../../shared/services/Account/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-query-answer',
  templateUrl: './query-answer.component.html',
  styleUrl: './query-answer.component.css'
})
export class QueryAnswerComponent implements OnInit{
  // querymessage:any;
  // QueryArray:Array<any>=[];
  modalMessage = '';
  @Input() mentor!:IMentor
  queryForm: FormGroup;
  selectedFile: File | null = null;
  addqueryurl='http://localhost:5164/api/query/AddAnswer';
  Instructor_Id="";
  id : string;
  userQueries: any[] = []; 
  // selectedFile: File | null = null;
  constructor(private fb: FormBuilder,private http: HttpClient ,private AccService:AccountService ,
     private router: Router,private route: ActivatedRoute, private toaster:ToastrService) {


    this.queryForm = this.fb.group({
      Question: ['', Validators.required],
      
      
    });
    // this.MentorID = this.route.snapshot.paramMap.get('id');

    this.Instructor_Id = this.route.snapshot.paramMap.get('id');
if (this.Instructor_Id) {
  console.log(' mentor ID provided in the route');
  // Handle the error, for example, navigate to an error page or show a message
}

     }



     ngOnInit() {
      // this.MentorID = this.route.snapshot.paramMap.get('id');
      this.Instructor_Id = this.route.snapshot.paramMap.get('id');
      this.getMentor(this.Instructor_Id);
      this.getQueries();
      
    }
    // getQueries() {
    //   this.http.get<any>('http://localhost:5164/api/query/UserQueries').subscribe(
    //     (data) => {
    //       console.log('data',data);
          
    //       this.userQueries = data.Result;
    //     },
    //     (error) => {
    //       console.error('Error fetching user queries:', error);
    //     }
    //   );
    // }
    getQueries() {
      this.http.get<any>('http://localhost:5164/api/query/UserQueries').subscribe(
          (data) => {
              console.log('data', data);
              this.userQueries = data.Result;
  
              // Sort userQueries by DateTime
              this.userQueries.sort((b, a) => {
                  return new Date(b.DateTime).getTime() - new Date(a.DateTime).getTime();
              });
          },
          (error) => {
              console.error('Error fetching user queries:', error);
          }
      );
  }
    getMentor(id: string) {
      this.AccService.getMentorById(this.Instructor_Id).subscribe((data: any) => {
        this.mentor = data;
        console.log(data);
        
      });
    }
  // Handle file selection
  onFileSelected(event: any) {
    const File: File = event.target.files[0];
    if (File) {
      this.selectedFile = File;
    }
  }

 

submitQuery() {
  const payload = this.queryForm.value;
  console.log('Payload:', payload);

  if (this.queryForm.invalid) {
    this.modalMessage = 'Please fill in the query message.';
    return;
  }

  const formData = new FormData();
  
  // Log values before appending
  console.log('Question value:', this.queryForm.get('Question')?.value);
  console.log('Mentor ID:', this.Instructor_Id);
  console.log('Selected file:', this.selectedFile);

  // Append values to FormData
  formData.append('Question', this.queryForm.get('Question')?.value);
  formData.append('User_Instructor_Id', this.Instructor_Id);
  if (this.selectedFile) {
    formData.append('File', this.selectedFile);
  }

  console.log('Final formData:', formData);

  // Make API request
  this.http.post(this.addqueryurl, formData)
    .subscribe({
      next: (response:any) => {
        if(response){
// this.toaster.warning("Try again later!!!!!")

this.toaster.success("Query submitted successfully!")
        }
        else{
this.toaster.warning("Try again later!!!!!")
// this.toaster.success("Query submitted successfully!")

        }
        
 
      },
      error: (error) => {
        console.error('Error occurred while submitting the query:', error);
        this.modalMessage = error.error?.message || 'There was an error submitting the query.';
      }
    });
}













  // downloadFile() {
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
  // }

  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.selectedFile = file;
  //     console.log('Selected file:', this.selectedFile);
  //   }
  // }

  // uploadFile(): void {
  //   if (this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('file', this.selectedFile);

  //     // Send the file to the backend
  //     this.http.post('your-backend-url', formData).subscribe(response => {
  //       console.log('File uploaded successfully', response);
  //     });
  //   }
  // }

  

  // GetQuery(obj: any) {
  //    this.QueryArray.push(obj)
  //   }

  }