import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css']
})
export class Update_profileComponent implements OnInit {
  profileform:FormGroup;

  constructor(private profile3:ProfileService,private fb:FormBuilder) {
    this.profileform=this.fb.group({
      UserName:['',[Validators.required,Validators.minLength(6),
        Validators.maxLength(20)]],
        Email:['',[Validators.required,Validators.email]],
        Password:['',[Validators.required,Validators.minLength(6)]],
        PHoneNumber:['',Validators.required],
        PersonalDetails:['',Validators.required],
        Skills:['',Validators.required],
        Experience:['',Validators.required],
        Portfolio:['',],
        AssignedTasks:['',],
        Rating:['',]


    })

   }

  ngOnInit() {
    this.profile3.getprofile().subscribe({

      next:(profile4:any)=>{ 
        this.profileform.patchValue(profile4);
    }
      
  }
      
    )
  }
  onsubmit():void{
    if(this.profileform.valid){
      this.profile3.updateProfile(this.profileform.value).subscribe({
        next:(update1:any)=>{
          console.log('Profile updated successfully',update1);
        }
      })
    }
  }

}
