import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMentor } from '../../../../core/enums/Mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../../../../shared/services/Account/account.service';

@Component({
  selector: 'app-mentor-profile',
  templateUrl: './mentor-profile.component.html',
  styleUrl: './mentor-profile.component.css'
})
export class MentorProfileComponent {
  id : string;
  // mentorId: string | null = null;
  mentorProfile: IMentor | undefined;

  constructor(private route: ActivatedRoute ,private httpClient: HttpClient,private AccService:AccountService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadMentor();
  }

  loadMentor() {
    this.AccService.getMentorById(this.id).subscribe(
      (data: any) => {
        this.mentorProfile = data;
      },
      (error) => {
        console.error('Error fetching mentor', error);
      }
    );
  }

  loadMentorProfile(id:string):void{
    // const mentorlist:IMentor[]=[
    //   {
    //     id: s,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]     },
    //   {
    //     id: 2,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]
    //   },
    //   {
    //     id: 3,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]
    //   },
    //   {
    //     id:4,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]
    //   },
    //   {
    //     id:5,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]
    //   },
    //   {
    //     id:6,
    //     FirstName: 'Alice',
    //     LastName:'Johnson',
    //     Image: 'https://via.placeholder.com/150',
    //      category: 'Machine Learning',
    //     Title: 'Machine Learning Engineer',
    //     AverageRate: 3,
    //     Price: 199.99,
    //     YearsOfExperience:5,
    //    About:'Lo Nam ligula magna, gravida id suscipit vitae, condimentum ac mauris. Mauris nibh leo, aliquet vel turpiscing elit. Nam ligula magcing elit. Nam ligula magcing elit. Nam ligula mag eget, tempus faucibus felis..',
    //    Skills: ['Front End', 'UI/UX'],
    //    SocialAccounts:[]
    //   }
    // ];
    // this.mentorProfile = mentorlist.find(mentor=> mentor.id === id);
  }



//   ngOnInit(): void {
//     this.id = this.route.snapshot.paramMap.get('id')!;
//     this.loadMentorProfile(Number(this.id));
//   }

//   loadMentorProfile(id: number): void {
//     this.getMentorById(id).subscribe(
//       (mentor: IMentor) => {
//         this.mentorProfile = mentor;
//       },
//       (error) => {
//         console.error('Error fetching mentor data:', error);
//       }
//     );
//   }

//   // Method to fetch mentor data by ID
//   getMentorById(id: number): Observable<IMentor> {
//     // const apiUrl = `http://localhost:5164/api/Account/AddQuery/${id}`;
//     return this.httpClient.get<IMentor>(apiUrl);
//   }
}
