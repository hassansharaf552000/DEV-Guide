import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMentor } from '../../../../core/enums/Mentor';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../../shared/services/Account/account.service';

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
  MentorID="";
  addqueryurl='http://localhost:5164/api/query/AddQuery';

  constructor(private fb: FormBuilder, private http: HttpClient, private toaster:ToastrService,
    private router: Router,private route: ActivatedRoute,  private AccService:AccountService) {
    this.queryForm = this.fb.group({
      Question: ['', Validators.required],
      
      
    });
    // this.MentorID = this.route.snapshot.paramMap.get('id');

    this.MentorID = this.route.snapshot.paramMap.get('id');
if (this.MentorID) {
  console.log(' mentor ID provided in the route');
  // Handle the error, for example, navigate to an error page or show a message
}


  }
  // showConfirmationModal() {
  //   this.isConfirmationVisible = true;

  //   // Run change detection manually
  //   this.cdr.detectChanges();
  // }

  
    ngOnInit() {
      // this.MentorID = this.route.snapshot.paramMap.get('id');
      this.getMentor(this.MentorID);
      
    }

    getMentor(id: string) {
      this.AccService.getMentorById(this.MentorID).subscribe((data) => {
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
    console.log('file', File);
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
  console.log('Mentor ID:', this.MentorID);
  console.log('Selected file:', this.selectedFile);

  // Append values to FormData
  formData.append('Question', this.queryForm.get('Question')?.value);
  formData.append('User_Instructor_Id', this.MentorID);
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


  // Show the success modal
  // showModal() {
  //   this.isModalVisible = true;
  // }

  // Go to home page after modal
  // goToHome() {
  //   this.isModalVisible = false;
  //   // this.router.navigate(['/home']);
  // }
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

 // Show the confirmation modal
  // showConfirmationModal() {
  //   this.isConfirmationVisible = true;
  // }

  // Confirm sending the query
  // confirmSend() {
  //   this.isConfirmationVisible = false;
  //   this.submitQuery();
  // }

  // Cancel the action
  // cancelSend() {
  //   this.isConfirmationVisible = false;
  // }

  
//   submitQuery() {
//     const payload = this.queryForm.value;
//     console.log('Payload:', payload);
//     if (this.queryForm.invalid) {
//       this.modalMessage = 'Please fill in the query message.';
//       // this.showModal();
//       return;
//     }
  
//     const formData = new FormData();
//     formData.append('Question', this.queryForm.get('Question')?.value);
//     formData.append('mentorId', this.MentorID);
//     if (this.selectedFile) {
//       formData.append('File', this.selectedFile);
  
//     }
   
// console.log('',formData);
  
//     // Make API request
//     this.http.post(this.addqueryurl, formData)
//       .subscribe({
//         next: (response) => {
//           this.modalMessage = 'Query submitted successfully!';
//           // this.showModal();
//         },
//         error: (error) => {
//           // Log error details for debugging
//           console.error('Error occurred while submitting the query:', error);
//           this.modalMessage = error.error?.message || 'There was an error submitting the query.';
//           // this.showModal();
//         }
//       });
//   }
  