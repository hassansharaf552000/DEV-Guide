import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMentor } from '../../../../core/enums/Mentor';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrl: './mentor-profile.component.css'
})
export class MentorProfileComponent {
  mentorId: string | null = null;
  mentorProfile: IMentor | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadMentorProfile(Number(id));
  }

  loadMentorProfile(id:Number):void{
    const mentorlist:IMentor[]=[
      {
        id: 1,
        name: 'John Doe',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Web Development',
        title: 'Senior Developer',
        rate: 3,
        currentprice: 99.99,
         yearsofexperience:5,
        about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
        skills: ['Front End', 'UI/UX', 'Angular', 'HTML', 'CSS'],      },
      {
        id: 2,
        name: 'Jane Smith',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Data Science',
        title: 'Data Scientist',
        rate: 2,
        currentprice: 149.99,
        yearsofexperience:5,
       about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       skills: ['Front End', 'UI/UX'],
      },
      {
        id: 3,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 1,
        currentprice: 199.99,
        yearsofexperience:5,
       about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       skills: ['Front End', 'UI/UX'], 
      },
      {
        id:4,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 5,
        currentprice: 199.99,
        yearsofexperience:5,
       about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       skills: ['Front End', 'UI/UX'],
      },
      {
        id:5,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 2,
        currentprice: 199.99,
        yearsofexperience:5,
       about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       skills: ['Front End', 'UI/UX'],
      },
      {
        id:6,
        name: 'Alice Johnson',
        imageurl: 'https://via.placeholder.com/150',
        category: 'Machine Learning',
        title: 'Machine Learning Engineer',
        rate: 3,
        currentprice: 199.99,
        yearsofexperience:5,
       about:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       skills: ['Front End', 'UI/UX'],
      }
    ];
    this.mentorProfile = mentorlist.find(mentor=> mentor.id === id);
  }
}
