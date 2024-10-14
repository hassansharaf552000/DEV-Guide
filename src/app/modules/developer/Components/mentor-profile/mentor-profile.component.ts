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
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]     },
      {
        id: 2,
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]
      },
      {
        id: 3,
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]
      },
      {
        id:4,
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]
      },
      {
        id:5,
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]
      },
      {
        id:6,
        FirstName: 'Alice',
        LastName:'Johnson',
        Image: 'https://via.placeholder.com/150',
         category: 'Machine Learning',
        Title: 'Machine Learning Engineer',
        AverageRate: 3,
        Price: 199.99,
        YearsOfExperience:5,
       About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
       Skills: ['Front End', 'UI/UX'],
       SocialAccounts:[]
      }
    ];
    this.mentorProfile = mentorlist.find(mentor=> mentor.id === id);
  }
}
