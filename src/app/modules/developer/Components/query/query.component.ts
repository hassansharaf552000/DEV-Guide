import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent implements OnInit {
  @Input() mentor!:IMentor
  queryForm: FormGroup;
  selectedFile: File | null = null;
  isModalVisible = false;
  isConfirmationVisible = false;
  modalMessage = '';
  addqueryurl='http://localhost:5164/api/Account/AddQuery';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router,private route: ActivatedRoute) {
    this.queryForm = this.fb.group({
      Question: ['', Validators.required],
      File: [null]
    });
  }
  ngOnInit(): void {
    // Get mentor ID from the route
    this.mentor.id = +this.route.snapshot.paramMap.get('id');
    // Now you can use mentorId to fetch the mentor's details from an API or a local data source
  }
  // Handle file selection
  onFileSelected(event: any) {
    const File: File = event.target.files[0];
    if (File) {
      this.selectedFile = File;
    }
  }

  // Show the confirmation modal
  showConfirmationModal() {
    this.isConfirmationVisible = true;
  }

  // Confirm sending the query
  confirmSend() {
    this.isConfirmationVisible = false;
    this.submitQuery();
  }

  // Cancel the action
  cancelSend() {
    this.isConfirmationVisible = false;
  }

  
  submitQuery() {
    if (this.queryForm.invalid) {
      this.modalMessage = 'Please fill in the query message.';
      this.showModal();
      return;
    }
  
    const formData = new FormData();
    formData.append('Question', this.queryForm.get('Question')?.value);
  
    if (this.selectedFile) {
      formData.append('File', this.selectedFile);
  
    }
    formData.append('mentorId', this.mentor.id.toString());

  
    // Make API request
    this.http.post(this.addqueryurl, formData)
      .subscribe({
        next: (response) => {
          this.modalMessage = 'Query submitted successfully!';
          this.showModal();
        },
        error: (error) => {
          // Log error details for debugging
          console.error('Error occurred while submitting the query:', error);
          this.modalMessage = error.error?.message || 'There was an error submitting the query.';
          this.showModal();
        }
      });
  }
  
  // Show the success modal
  showModal() {
    this.isModalVisible = true;
  }

  // Go to home page after modal
  goToHome() {
    this.isModalVisible = false;
    // this.router.navigate(['/home']);
  }
}


//   querymessage:any;
//   QueryArray:Array<any>=[];
//   isModalVisible = false;
//   selectedFile: File | null = null;
//   form: FormGroup;
//   constructor(private http: HttpClient,private builder: FormBuilder,private router: Router) {
//     this.form= this.builder.group(
//       {
//         query:["",[Validators.required]]
//       })

//   }

//   onFileSelected(event: any): void {
//     const file = event.target.files[0];
//     if (file) {
//       this.selectedFile = file;
//       console.log('Selected file:', this.selectedFile);
//     }
//   }

//   uploadFile(): void {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('file', this.selectedFile);

//       // Send the file to the backend
//       this.http.post('your-backend-url', formData).subscribe(response => {
//         console.log('File uploaded successfully', response);
//       });
//     }
//   }

//   send(){
//     console.log( this.form.value)

//   }

//   GetQuery(obj: any) {
//      this.QueryArray.push(obj)
//     }



  
//   modalMessage = 'The Query Send Successfuly!';

//   isConfirmationVisible = false;

//   showModal() {

//   }

//   goToHome() {
//     this.isModalVisible = false; 
//     this.router.navigate(['/home']); 
//   }



// d
//   showConfirmationModal() {
//     this.isConfirmationVisible = true;
//   }

 
//   confirmSend() {
//     this.isModalVisible = true;
//     this.isConfirmationVisible = false;  // Hide the modal
//   }

 
//   cancelSend() {
//     this.isConfirmationVisible = false;
//   }



// }

