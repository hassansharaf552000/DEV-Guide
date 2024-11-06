import { Component } from '@angular/core';
import { AccountService } from '../../services/Account/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']  // هنا يجب أن يكون `styleUrls` وليس `styleUrl`
})
export class RequestComponent {
  role:any="Mentor";

  constructor(private roleService: AccountService,private toaster:ToastrService,) {}

  // Method to handle role change submission
  onSubmit() {
    if (!this.role) {
      console.log('No role selected!');
      return;
    }this.roleService.changeUserRole(this.role).subscribe({
      next: (response) => {
        console.log('Role changed successfully:', response.message); // Access the message here
        this.toaster.success("Your requsest sent successfully!")
        // Handle success (e.g., show a message or redirect)
      },
      error: (error) => {
        console.error('Error changing role:', error);
        this.toaster.warning("Try again later!!!!!")
        // Handle error (e.g., show an error message)
      },
    });
    

  //   this.roleService.changeUserRole(this.role).subscribe({
  //     next: (response) => {
  //       console.log('Role changed successfully:', response);
  //       // Handle success (e.g., show a message or redirect)
  //     },
  //     error: (error) => {
  //       console.error('Error changing role:', error);
  //       // Handle error (e.g., show an error message)
  //     },
  //   });
  // }
}}
  // selectedRole: string | null = null; // لتخزين الدور المختار
  // instructions: string[] = []; // لتخزين التعليمات بناءً على الدور

  // // هذه التعليمات تمثل خيارات مختلفة لكل دور
  // roleInstructions = {
  //   developer: [
  //     'Follow coding standards and best practices.',
  //     'Communicate effectively with team members.',
  //     'Write unit tests for your code.',
  //     'Review code from peers.'
  //   ],
  //   hr: [
  //     'Understand the company policies and procedures.',
  //     'Conduct interviews and manage onboarding processes.',
  //     'Ensure compliance with labor laws.',
  //     'Provide support for employee issues.'
  //   ],
  //   mentor: [
  //     'Guide mentees in their career development.',
  //     'Provide feedback on projects.',
  //     'Encourage critical thinking and problem-solving.',
  //     'Share your professional experiences.'
  //   ]
  // };

  // // هذه الدالة لتحديد الدور المختار
  // selectRole(role: string) {
  //   this.selectedRole = role;
  //   this.instructions = this.roleInstructions[role] || [];
  // }

