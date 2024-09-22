import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-request',
  templateUrl: './mentor-request.component.html',
  styleUrl: './mentor-request.component.css',
})
export class MentorRequestComponent {
  users = [
    {
      name: 'Asmaa Moamen',
      img: './assets/avatar-3.jpg',
      level: 'New Developer',
      points: 'Request',
      day: 'Sunday',
      month: 'Sep',
      time: '7 pm',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis reprehenderit ad facere sapiente vitae.',
    },
    {
      name: 'Aya Moamen',
      img: './assets/avatar-8.jpg',
      level: 'New Developer',
      points: 'Request',
      day: 'Friday',
      month: 'Aug',
      time: '5 pm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.',
    },
    {
      name: 'Aya Moamen',
      img: './assets/avatar-8.jpg',
      level: 'New Developer',
      points: 'Request',
      day: 'Friday',
      month: 'Aug',
      time: '5 pm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.',
    },
    {
      name: 'Aya Moamen',
      img: './assets/avatar-8.jpg',
      level: 'New Developer',
      points: 'Request',
      day: 'Friday',
      month: 'Aug',
      time: '5 pm',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.',
    },
  ];

  accept(user: any) {
    console.log('Accepted:', user.name);
  }

  reject(user: any) {
    console.log('Rejected:', user.name);
  }
}
