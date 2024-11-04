import { Component } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']  // هنا يجب أن يكون `styleUrls` وليس `styleUrl`
})
export class RequestComponent {
  selectedRole: string | null = null; // لتخزين الدور المختار
  instructions: string[] = []; // لتخزين التعليمات بناءً على الدور

  // هذه التعليمات تمثل خيارات مختلفة لكل دور
  roleInstructions = {
    developer: [
      'Follow coding standards and best practices.',
      'Communicate effectively with team members.',
      'Write unit tests for your code.',
      'Review code from peers.'
    ],
    hr: [
      'Understand the company policies and procedures.',
      'Conduct interviews and manage onboarding processes.',
      'Ensure compliance with labor laws.',
      'Provide support for employee issues.'
    ],
    mentor: [
      'Guide mentees in their career development.',
      'Provide feedback on projects.',
      'Encourage critical thinking and problem-solving.',
      'Share your professional experiences.'
    ]
  };

  // هذه الدالة لتحديد الدور المختار
  selectRole(role: string) {
    this.selectedRole = role;
    this.instructions = this.roleInstructions[role] || [];
  }
}
