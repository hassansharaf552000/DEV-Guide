import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  querymessage:any;
  QueryArray:Array<any>=[];
  isModalVisible = false;
  selectedFile: File | null = null;
  form: FormGroup;
  constructor(private http: HttpClient,private builder: FormBuilder,private router: Router) {
    this.form= this.builder.group(
      {
        query:["",[Validators.required]]
      })

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
    console.log( this.form.value)

  }

  GetQuery(obj: any) {
     this.QueryArray.push(obj)
    }



  // Message to display in the modal
  modalMessage = 'The Query Send Successfuly!';

  isConfirmationVisible = false;
  // Method to show the modal when button is clicked
  showModal() {

  }

  // Method to hide the modal and navigate to the home page
  goToHome() {
    this.isModalVisible = false; // Hide the modal
    this.router.navigate(['/home']); // Navigate to the home page
  }



  // Show the confirmation modal when "Send" button is clicked
  showConfirmationModal() {
    this.isConfirmationVisible = true;
  }

  // Confirm the action and send the file (navigate to '/answer_query')
  confirmSend() {
    this.isModalVisible = true;
    this.isConfirmationVisible = false;  // Hide the modal
  }

  // Cancel the action and hide the confirmation modal
  cancelSend() {
    this.isConfirmationVisible = false;
  }


}