import { Component, Input } from '@angular/core';
import { IHR } from '../../../../core/enums/HR';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-card',
  templateUrl: './hr-card.component.html',
  styleUrl: './hr-card.component.css'
})
export class HRCardComponent {
  @Input() HR!: any;
 
 
  

  getStars(rate: number): string[] {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return [
      ...Array(fullStars).fill('fa-star'),
      ...Array(halfStar).fill('fa-star-half-o'),
      ...Array(emptyStars).fill('fa-star-o')
    ];
  }
  // Facebook=this.HR.SocialAccounts[0]
  // LinkedIn=this.HR.SocialAccounts[1]
  // GitHub=this.HR.SocialAccounts[2]

  constructor(  private router: Router) {
    console.log(this.HR);
    
  }


  // goToHRProfile(id: string) {
  //   this.router.navigate(['/HRs', id]);
  // }

}
