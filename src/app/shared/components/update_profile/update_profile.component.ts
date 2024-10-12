import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service'; // Import the ProfileService
import { Profile } from '../../profile';
import { ChangePassword } from '../../change-password';
import { AuthService } from '../../services/Auth/auth.service';
import { Skill } from '../../../skill';
import { EducationViewModel } from '../../../education-view-model';
import { ExperienceViewModel } from '../../../experience-view-model';

//import { Profile } from '../profile'; // Import the Profile interface

@Component({
  selector: 'app-update_profile',
  templateUrl: './update_profile.component.html',
  styleUrls: ['./update_profile.component.css'],
})
export class Update_ProfileComponent implements OnInit {
  InformationForm: FormGroup;
  profile!: Profile;
  selectedImage: string | ArrayBuffer | null = null;
  selectedCV: File | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient, private profileService: ProfileService) {}

  ngOnInit(): void {
    // Initialize the form first
    this.InformationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      price: [null, [Validators.required, Validators.min(5)]],
      level: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      yearsOfExperience: [null, [Validators.required, Validators.min(0), Validators.max(50)]],
      About:['',[Validators.required,Validators.minLength(500)]],
      image: [Validators.required],
      imagePath: ['',Validators.required],
      cv: [Validators.required],
      cvPath: ['',Validators.required],
    });

    // Then load the profile data
    this.loadProfileData();
  }

  loadProfileData() {
    this.profile = {
      imagePath: 'images.jpg',
      firstName: 'Joh',
      lastName: 'Doe',
      title: 'Software Developer',
      price: 5000,
      cvPath: 'cv.pdf',
      level: 'Senior',
      country: 'Egypt',
      phoneNumber: '1234567890', // Match pattern (numbers only)
      yearsOfExperience: 5,
      About:"I am Adham Hamdy From Aswan"
    };

    // Initialize the form with current profile data
    this.InformationForm.patchValue(this.profile);
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const img = new Image();
      const reader = new FileReader();

      reader.onload = (e: any) => {
        img.src = e.target.result;

        img.onload = () => {
          const width = img.width;
          const height = img.height;

          // Set the required width and height
          const requiredWidth = 300; // Example size in pixels
          const requiredHeight = 300;

          if (width <= requiredWidth && height <= requiredHeight) {
            this.selectedImage = e.target.result; // Display the image
          } else {
            alert(`Invalid image size. Please upload an image with ${requiredWidth}x${requiredHeight} dimensions.`);
          }
        };
      };

      reader.readAsDataURL(file); // Read the uploaded file as a data URL
    }
  }

  onCVChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedCV = file; // Store the CV file
      this.InformationForm.patchValue({ cv: file });
      this.InformationForm.get('cv')?.markAsTouched();
      this.InformationForm.get('cv')?.markAsDirty();
      this.InformationForm.get('cv')?.updateValueAndValidity();
    }
  }

  submitinformationform():void{
    if(this.InformationForm.valid){
      const updatedProfile: Profile = {
        ...this.InformationForm.value,
        imagePath: this.selectedImage as string,
        cvPath: this.selectedCV ? this.selectedCV.name : this.profile.cvPath,
      };
      console.log('Updated Profile:', updatedProfile);

      // Prepare FormData for file uploads
      const formData = new FormData();
      Object.keys(this.InformationForm.controls).forEach(key => {
        const controlValue = this.InformationForm.get(key)?.value;
        if (controlValue instanceof File) {
          formData.append(key, controlValue);
        } else {
          formData.append(key, controlValue);
        }
      });
    }
    else{
      this.InformationForm.markAllAsTouched();
    }


  }

  onSubmit(): void {

      this.submitinformationform()

      // Call your API service to update the profile data in the database
      // this.profileService.updateProfile(formData).subscribe(...);
     // else {
    //   this.InformationForm.markAllAsTouched();
    // }

  }
}



















  // //imageFile: File | null = null;  // Store the actual file object
  // skills: Skill[] = [];  // Array to hold all available skills
  // filteredSkills: Skill[] = [];  // Array to hold filtered skills based on input
  // selectedSkills: Skill[] = [];  // Array to hold selected skills
  // educationList: EducationViewModel[] = []; // List to hold all education entries
  // experiencesList: ExperienceViewModel[] = [];

  // constructor(private fb: FormBuilder , private http: HttpClient,
  //   private profileService: ProfileService) {

  // }

  // // ngOnInit(): void {
  // //   // Initialize the form with values from the database (mocked here as an example)



  // //   this.updateForm = this.fb.group({
  // //     firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
  // //     lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
  // //     userName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
  // //     cv: [null],  // For file upload
  // //     cvPath: ['', Validators.maxLength(255)],
  // //     country: ['', Validators.required],
  // //     phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
  // //     title: ['', Validators.maxLength(100)],
  // //     yearsOfExperience: [null, [Validators.min(0), Validators.max(50)]],
  // //     level: ['', Validators.required],
  // //     image: [null],  // Form control for the image
  // //     imagePath: ['', Validators.maxLength(255)],
  // //     about: ['', [Validators.maxLength(500)]],
  // //     skillInput: ['', Validators.required] ,
  // //     degree: ['', Validators.required],
  // //     fieldOfStudy: ['', Validators.required],
  // //     university: ['', Validators.required],
  // //     faculty: [''],
  // //     countryOfStudy: ['', Validators.required],
  // //     startDate: ['', Validators.required],
  // //     endDate: [''],
  // //     tillNow: [false],
  // //     Job: ['', Validators.required],
  // //     organization: ['', Validators.required],
  // //     startDateofwork: ['', Validators.required],
  // //     endDateofwork: [''],
  // //     tillNow1: [false] // Default to false
  // //   });

  // //   this.loadUserData();
  // //   this.loadAvailableSkills();
  // //   this.loadEducationData();
  // //   this.loadExperienceData();
  // //   this.updateForm.get('skillInput')!.valueChanges.subscribe(value => {
  // //     this.filterSkills(value);
  // //   });




  // //  // Load available skills from the backend
  // // }
  // loadExperienceData() {
  //   // Mock data - replace with API call to fetch experience data
  //   this.experiencesList = [
  //     {
  //       fieldOfStudy: 'Software Development',
  //       organization: 'Tech Company',
  //       startDate: new Date('2020-01-01'),
  //       endDate: new Date('2022-01-01'),
  //       tillNow: false
  //     }
  //     // Add more entries as needed
  //   ];
  // }

  // loadEducationData() {
  //   // Mock data - replace with API call to fetch education data
  //   this.educationList = [
  //     {
  //       degree: 'Bachelor of Science',
  //       fieldOfStudy: 'Computer Science',
  //       university: 'Assuit University',
  //       faculty: 'Engineering',
  //       countryOfStudy: 'Egypt',
  //       startDate: new Date('2015-09-01'),
  //       endDate: new Date('2019-06-30'),
  //       tillNow: false
  //     }
  //     // Add more entries as needed
  //   ];
  // }

  // // Mock function to load user data from the backend
  // // loadUserData() {
  // //   const userData = {
  // //     firstName: 'John',    // Example data from database
  // //     lastName: 'Doe',
  // //     userName: 'johndoe',  cvPath: 'path/to/cv.pdf',
  // //     country: 'USA',
  // //     phoneNumber: '1234567890',
  // //     about: 'This is some information about the user.',
  // //     title: ['', Validators.maxLength(100)],  // Title field
  // //     yearsOfExperience: [null, [Validators.min(0), Validators.max(50)]],  // Years of Experience
  // //     level: ['', Validators.required],  // Level field
  // //     image: [null],  // Image upload
  // //     imagePath: ['', Validators.maxLength(255)] , // Mock user data for demonstration
  // //       // Other user data...
  // //       skills: [1, 3]  // Example selected skills



  // //   };

  // //   this.updateForm.patchValue(userData);

  // // }
  // // onCVSelected(event: any) {
  // //   if (event.target.files.length > 0) {
  // //     this.uploadedCV = event.target.files[0];
  // //     this.updateForm.patchValue({ cv: this.uploadedCV });
  // //   }
  // // }

  // // onImageChange(event: Event): void {
  // //   console.log('onImageChange triggered', event);

  // //   const input = event.target as HTMLInputElement;

  // //   if (input.files && input.files[0]) {
  // //     this.imageFile = input.files[0];  // Store the actual file object
  // //     const reader = new FileReader();

  // //     console.log('Selected file:', this.imageFile);

  // //     reader.onload = () => {
  // //       console.log('FileReader result:', reader.result);
  // //       this.selectedImage = reader.result;  // Use this to show image preview

  // //       // Update the form value for the image (we can also keep the file separately)
  // //       this.updateForm.patchValue({ image: this.imageFile });
  // //     };

  // //     reader.onerror = (error) => {
  // //       console.error('Error reading file:', error);
  // //     };

  // //     reader.readAsDataURL(this.imageFile);
  // //   } else {
  // //     console.warn('No file selected');
  // //   }
  // // }

  // loadAvailableSkills() {
  //   // Mocking an API call to fetch skills
  //   this.skills = [
  //     new Skill(1, 'C#', 'C# programming language'),
  //     new Skill(2, 'JavaScript', 'JavaScript programming language'),
  //     new Skill(3, 'Angular', 'Angular framework'),
  //     new Skill(4, 'SQL', 'SQL database language'),
  //     new Skill(5, 'Python', 'Python programming language')
  //     // Add more skills as needed
  //   ];
  // }

  // // filterSkills(query: string) {
  // //   if (query) {
  // //     this.filteredSkills = this.skills.filter(skill =>
  // //       skill.name.toLowerCase().includes(query.toLowerCase())
  // //     );
  // //   } else {
  // //     this.filteredSkills = [];
  // //   }
  // // }

  // // selectSkill(skill: Skill) {
  // //   // Check if the skill is already selected
  // //   if (!this.selectedSkills.find(s => s.id === skill.id)) {
  // //     this.selectedSkills.push(skill);  // Add selected skill
  // //   }
  // //   this.updateForm.get('skillInput')?.setValue('');  // Clear the input
  // //   this.filteredSkills = [];  // Clear the filtered list
  // // }



  // // Handle form submission to update the user data
  // // onSubmit(): void {
  // //   if (this.updateForm.valid) {
  // //     const updatedData = this.updateForm.value;
  // //     console.log('Updated User Data:', updatedData);
  // //     const formData = new FormData();
  // //     formData.append('cv', this.uploadedCV as File);
  // //     formData.append('cvPath', this.updateForm.get('cvPath')?.value);
  // //     formData.append('country', this.updateForm.get('country')?.value);
  // //     formData.append('phoneNumber', this.updateForm.get('phoneNumber')?.value);
  // //     formData.append('about', this.updateForm.get('about')?.value);
  // //     formData.append('title', this.updateForm.get('title')?.value);
  // //     formData.append('yearsOfExperience', this.updateForm.get('yearsOfExperience')?.value);
  // //     formData.append('level', this.updateForm.get('level')?.value);
  // //     if (this.selectedImage) {
  // //       formData.append('image', this.imageFile);
  // //     }
  // //     formData.append('imagePath', this.updateForm.get('imagePath')?.value);
  // //     skills: this.selectedSkills;  // Add selected skill IDs

  // //       skills: this.selectedSkills  ;// Add selected skill IDs
  // //       const newEducation: EducationViewModel = this.updateForm.value;
  // //       this.educationList.push(newEducation); // Add new entry to the list
  // //       const newExperience: ExperienceViewModel = this.updateForm.value;
  // //       this.experiencesList.push(newExperience); // Add new entry to the list
  // //       console.log('Experience updated:', this.experiencesList);
  // //       console.log('Education updated:', this.educationList);


  // //     // Call service to update profile


  // //     // Call your API service to update the user data in the database
  // //   }
  // // }


