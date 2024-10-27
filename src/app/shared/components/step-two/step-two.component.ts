import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../services/Account/account.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  stepTwoForm!: FormGroup;
  invalidProfileImage = true;
  ProfileImage:File|null = null
  // Static array of countries
  countries = [
    { id: 'AF', name: 'Afghanistan' },
    { id: 'AL', name: 'Albania' },
    { id: 'DZ', name: 'Algeria' },
    { id: 'AS', name: 'American Samoa' },
    { id: 'AD', name: 'Andorra' },
    { id: 'AO', name: 'Angola' },
    { id: 'AI', name: 'Anguilla' },
    { id: 'AQ', name: 'Antarctica' },
    { id: 'AG', name: 'Antigua and Barbuda' },
    { id: 'AR', name: 'Argentina' },
    { id: 'AM', name: 'Armenia' },
    { id: 'AW', name: 'Aruba' },
    { id: 'AU', name: 'Australia' },
    { id: 'AT', name: 'Austria' },
    { id: 'AZ', name: 'Azerbaijan' },
    { id: 'BS', name: 'Bahamas' },
    { id: 'BH', name: 'Bahrain' },
    { id: 'BD', name: 'Bangladesh' },
    { id: 'BB', name: 'Barbados' },
    { id: 'BY', name: 'Belarus' },
    { id: 'BE', name: 'Belgium' },
    { id: 'BZ', name: 'Belize' },
    { id: 'BJ', name: 'Benin' },
    { id: 'BM', name: 'Bermuda' },
    { id: 'BT', name: 'Bhutan' },
    { id: 'BO', name: 'Bolivia' },
    { id: 'BQ', name: 'Bonaire, Sint Eustatius and Saba' },
    { id: 'BA', name: 'Bosnia and Herzegovina' },
    { id: 'BW', name: 'Botswana' },
    { id: 'BV', name: 'Bouvet Island' },
    { id: 'BR', name: 'Brazil' },
    { id: 'IO', name: 'British Indian Ocean Territory' },
    { id: 'BN', name: 'Brunei Darussalam' },
    { id: 'BG', name: 'Bulgaria' },
    { id: 'BF', name: 'Burkina Faso' },
    { id: 'BI', name: 'Burundi' },
    { id: 'CV', name: 'Cabo Verde' },
    { id: 'KH', name: 'Cambodia' },
    { id: 'CM', name: 'Cameroon' },
    { id: 'CA', name: 'Canada' },
    { id: 'KY', name: 'Cayman Islands' },
    { id: 'CF', name: 'Central African Republic' },
    { id: 'TD', name: 'Chad' },
    { id: 'CL', name: 'Chile' },
    { id: 'CN', name: 'China' },
    { id: 'CX', name: 'Christmas Island' },
    { id: 'CC', name: 'Cocos (Keeling) Islands' },
    { id: 'CO', name: 'Colombia' },
    { id: 'KM', name: 'Comoros' },
    { id: 'CD', name: 'Congo, Democratic Republic of the' },
    { id: 'CG', name: 'Congo, Republic of the' },
    { id: 'CK', name: 'Cook Islands' },
    { id: 'CR', name: 'Costa Rica' },
    { id: 'HR', name: 'Croatia' },
    { id: 'CU', name: 'Cuba' },
    { id: 'CW', name: 'Curaçao' },
    { id: 'CY', name: 'Cyprus' },
    { id: 'CZ', name: 'Czech Republic' },
    { id: 'DK', name: 'Denmark' },
    { id: 'DJ', name: 'Djibouti' },
    { id: 'DM', name: 'Dominica' },
    { id: 'DO', name: 'Dominican Republic' },
    { id: 'EC', name: 'Ecuador' },
    { id: 'EG', name: 'Egypt' },
    { id: 'SV', name: 'El Salvador' },
    { id: 'GQ', name: 'Equatorial Guinea' },
    { id: 'ER', name: 'Eritrea' },
    { id: 'EE', name: 'Estonia' },
    { id: 'SZ', name: 'Eswatini' },
    { id: 'ET', name: 'Ethiopia' },
    { id: 'FK', name: 'Falkland Islands (Malvinas)' },
    { id: 'FO', name: 'Faroe Islands' },
    { id: 'FJ', name: 'Fiji' },
    { id: 'FI', name: 'Finland' },
    { id: 'FR', name: 'France' },
    { id: 'GF', name: 'French Guiana' },
    { id: 'PF', name: 'French Polynesia' },
    { id: 'TF', name: 'French Southern Territories' },
    { id: 'GA', name: 'Gabon' },
    { id: 'GM', name: 'Gambia' },
    { id: 'GE', name: 'Georgia' },
    { id: 'DE', name: 'Germany' },
    { id: 'GH', name: 'Ghana' },
    { id: 'GI', name: 'Gibraltar' },
    { id: 'GR', name: 'Greece' },
    { id: 'GL', name: 'Greenland' },
    { id: 'GD', name: 'Grenada' },
    { id: 'GP', name: 'Guadeloupe' },
    { id: 'GU', name: 'Guam' },
    { id: 'GT', name: 'Guatemala' },
    { id: 'GG', name: 'Guernsey' },
    { id: 'GN', name: 'Guinea' },
    { id: 'GW', name: 'Guinea-Bissau' },
    { id: 'GY', name: 'Guyana' },
    { id: 'HT', name: 'Haiti' },
    { id: 'HM', name: 'Heard Island and McDonald Islands' },
    { id: 'VA', name: 'Holy See' },
    { id: 'HN', name: 'Honduras' },
    { id: 'HK', name: 'Hong Kong' },
    { id: 'HU', name: 'Hungary' },
    { id: 'IS', name: 'Iceland' },
    { id: 'IN', name: 'India' },
    { id: 'ID', name: 'Indonesia' },
    { id: 'IR', name: 'Iran' },
    { id: 'IQ', name: 'Iraq' },
    { id: 'IE', name: 'Ireland' },
    { id: 'IM', name: 'Isle of Man' },
    { id: 'IL', name: 'Israel' },
    { id: 'IT', name: 'Italy' },
    { id: 'JM', name: 'Jamaica' },
    { id: 'JP', name: 'Japan' },
    { id: 'JE', name: 'Jersey' },
    { id: 'JO', name: 'Jordan' },
    { id: 'KZ', name: 'Kazakhstan' },
    { id: 'KE', name: 'Kenya' },
    { id: 'KI', name: 'Kiribati' },
    { id: 'KP', name: 'Korea, Democratic People\'s Republic of' },
    { id: 'KR', name: 'Korea, Republic of' },
    { id: 'KW', name: 'Kuwait' },
    { id: 'KG', name: 'Kyrgyzstan' },
    { id: 'LA', name: 'Lao People\'s Democratic Republic' },
    { id: 'LV', name: 'Latvia' },
    { id: 'LB', name: 'Lebanon' },
    { id: 'LS', name: 'Lesotho' },
    { id: 'LR', name: 'Liberia' },
    { id: 'LY', name: 'Libya' },
    { id: 'LI', name: 'Liechtenstein' },
    { id: 'LT', name: 'Lithuania' },
    { id: 'LU', name: 'Luxembourg' },
    { id: 'MO', name: 'Macao' },
    { id: 'MG', name: 'Madagascar' },
    { id: 'MW', name: 'Malawi' },
    { id: 'MY', name: 'Malaysia' },
    { id: 'MV', name: 'Maldives' },
    { id: 'ML', name: 'Mali' },
    { id: 'MT', name: 'Malta' },
    { id: 'MH', name: 'Marshall Islands' },
    { id: 'MQ', name: 'Martinique' },
    { id: 'MR', name: 'Mauritania' },
    { id: 'MU', name: 'Mauritius' },
    { id: 'YT', name: 'Mayotte' },
    { id: 'MX', name: 'Mexico' },
    { id: 'FM', name: 'Micronesia' },
    { id: 'MD', name: 'Moldova' },
    { id: 'MC', name: 'Monaco' },
    { id: 'MN', name: 'Mongolia' },
    { id: 'ME', name: 'Montenegro' },
    { id: 'MS', name: 'Montserrat' },
    { id: 'MA', name: 'Morocco' },
    { id: 'MZ', name: 'Mozambique' },
    { id: 'MM', name: 'Myanmar' },
    { id: 'NA', name: 'Namibia' },
    { id: 'NR', name: 'Nauru' },
    { id: 'NP', name: 'Nepal' },
    { id: 'NL', name: 'Netherlands' },
    { id: 'NC', name: 'New Caledonia' },
    { id: 'NZ', name: 'New Zealand' },
    { id: 'NI', name: 'Nicaragua' },
    { id: 'NE', name: 'Niger' },
    { id: 'NG', name: 'Nigeria' },
    { id: 'NU', name: 'Niue' },
    { id: 'NF', name: 'Norfolk Island' },
    { id: 'MP', name: 'Northern Mariana Islands' },
    { id: 'NO', name: 'Norway' },
    { id: 'OM', name: 'Oman' },
    { id: 'PK', name: 'Pakistan' },
    { id: 'PW', name: 'Palau' },
    { id: 'PS', name: 'Palestine, State of' },
    { id: 'PA', name: 'Panama' },
    { id: 'PG', name: 'Papua New Guinea' },
    { id: 'PY', name: 'Paraguay' },
    { id: 'PE', name: 'Peru' },
    { id: 'PH', name: 'Philippines' },
    { id: 'PN', name: 'Pitcairn' },
    { id: 'PL', name: 'Poland' },
    { id: 'PT', name: 'Portugal' },
    { id: 'PR', name: 'Puerto Rico' },
    { id: 'QA', name: 'Qatar' },
    { id: 'RE', name: 'Réunion' },
    { id: 'RO', name: 'Romania' },
    { id: 'RU', name: 'Russian Federation' },
    { id: 'RW', name: 'Rwanda' },
    { id: 'BL', name: 'Saint Barthélemy' },
    { id: 'SH', name: 'Saint Helena' },
    { id: 'KN', name: 'Saint Kitts and Nevis' },
    { id: 'LC', name: 'Saint Lucia' },
    { id: 'MF', name: 'Saint Martin (French part)' },
    { id: 'SX', name: 'Sint Maarten (Dutch part)' },
    { id: 'PM', name: 'Saint Pierre and Miquelon' },
    { id: 'VC', name: 'Saint Vincent and the Grenadines' },
    { id: 'WS', name: 'Samoa' },
    { id: 'SM', name: 'San Marino' },
    { id: 'ST', name: 'Sao Tome and Principe' },
    { id: 'SA', name: 'Saudi Arabia' },
    { id: 'SN', name: 'Senegal' },
    { id: 'RS', name: 'Serbia' },
    { id: 'SC', name: 'Seychelles' },
    { id: 'SL', name: 'Sierra Leone' },
    { id: 'SG', name: 'Singapore' },
    { id: 'SX', name: 'Sint Maarten (Dutch part)' },
    { id: 'SK', name: 'Slovakia' },
    { id: 'SI', name: 'Slovenia' },
    { id: 'SB', name: 'Solomon Islands' },
    { id: 'SO', name: 'Somalia' },
    { id: 'ZA', name: 'South Africa' },
    { id: 'GS', name: 'South Georgia and the South Sandwich Islands' },
    { id: 'SS', name: 'South Sudan' },
    { id: 'ES', name: 'Spain' },
    { id: 'LK', name: 'Sri Lanka' },
    { id: 'SD', name: 'Sudan' },
    { id: 'SR', name: 'Suriname' },
    { id: 'SJ', name: 'Svalbard and Jan Mayen' },
    { id: 'SZ', name: 'Eswatini' },
    { id: 'SE', name: 'Sweden' },
    { id: 'CH', name: 'Switzerland' },
    { id: 'SY', name: 'Syrian Arab Republic' },
    { id: 'TW', name: 'Taiwan' },
    { id: 'TJ', name: 'Tajikistan' },
    { id: 'TZ', name: 'Tanzania, United Republic of' },
    { id: 'TH', name: 'Thailand' },
    { id: 'TL', name: 'Timor-Leste' },
    { id: 'TG', name: 'Togo' },
    { id: 'TK', name: 'Tokelau' },
    { id: 'TO', name: 'Tonga' },
    { id: 'TT', name: 'Trinidad and Tobago' },
    { id: 'TN', name: 'Tunisia' },
    { id: 'TR', name: 'Turkey' },
    { id: 'TM', name: 'Turkmenistan' },
    { id: 'TC', name: 'Turks and Caicos Islands' },
    { id: 'TV', name: 'Tuvalu' },
    { id: 'UG', name: 'Uganda' },
    { id: 'UA', name: 'Ukraine' },
    { id: 'AE', name: 'United Arab Emirates' },
    { id: 'GB', name: 'United Kingdom' },
    { id: 'US', name: 'United States' },
    { id: 'UM', name: 'United States Minor Outlying Islands' },
    { id: 'UY', name: 'Uruguay' },
    { id: 'UZ', name: 'Uzbekistan' },
    { id: 'VU', name: 'Vanuatu' },
    { id: 'VE', name: 'Venezuela' },
    { id: 'VN', name: 'Viet Nam' },
    { id: 'WF', name: 'Wallis and Futuna' },
    { id: 'EH', name: 'Western Sahara' },
    { id: 'YE', name: 'Yemen' },
    { id: 'ZM', name: 'Zambia' },
    { id: 'ZW', name: 'Zimbabwe' },
  ];


  constructor(private fb: FormBuilder, private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {
    this.stepTwoForm = this.fb.group({
      country: ['', Validators.required],
      phone: ['',[ Validators.required,Validators.minLength(11),Validators.maxLength(12)]],
    });
  }

  onNext(): void {
    if (this.stepTwoForm.valid && !this.invalidProfileImage) {
      this.accountService.updateFormData("Country",this.stepTwoForm.controls["country"].value)
      this.accountService.updateFormData("PhoneNumber",this.stepTwoForm.controls["phone"].value)
      this.accountService.updateFormData("Image",this.ProfileImage)

      this.router.navigate(['/step-three']);
    }
  }
  SelectFile(event:any){
    const file = event.target.files[0];
    this.ProfileImage = file;
    this.invalidProfileImage = false;
  }
  goToPreviousStep(): void {
    this.router.navigate(['/step-one']);
  }

   filteredCountries = [...this.countries]; // Copy of countries to filter
  searchTerm: string = ''; // To hold the search input

  // Method to filter countries based on user input
  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AccountService } from '../../../../shared/services/Account/account.service';

// @Component({
//   selector: 'app-step-two',
//   templateUrl: './step-two.component.html',
//   styleUrls: ['./step-two.component.css'],
// })
// export class StepTwoComponent implements OnInit {
//   stepTwoForm!: FormGroup;

//   constructor(private fb: FormBuilder, private router: Router, private Account: AccountService) {}

//   ngOnInit(): void {
//     this.stepTwoForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       country: ['', Validators.required],
//       phone: ['', Validators.required],
//       profileImage: [null, Validators.required], // Add profileImage to form group
//     });
//   }

//   onNext(): void {
//     if (this.stepTwoForm.valid) {
//       const formData = new FormData(); // Create FormData object to handle file upload

//       // Append form fields to FormData
//       Object.keys(this.stepTwoForm.controls).forEach((key) => {
//         const controlValue = this.stepTwoForm.get(key)?.value;

//         // Check if the current control is for 'profileImage' and handle it properly
//         if (key === 'profileImage' && controlValue instanceof FileList) {
//           if (controlValue.length > 0) {
//             formData.append(key, controlValue[0]); // Append the first file in the FileList
//           }
//         } else {
//           formData.append(key, controlValue);
//         }

//         this.Account.updateFormData(key, controlValue);
//       });

//       // Pass formData to Account service or other logic to handle file upload
//       this.router.navigate(['/developer/step-three']);
//     }
//   }

//   goToPreviousStep(): void {
//     this.router.navigate(['/developer/step-one']);
//   }
// }


// // import { Component, OnInit } from '@angular/core';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { Router } from '@angular/router';
// // import { AccountService } from '../../../../shared/services/Account/account.service';

// // @Component({
// //   selector: 'app-step-two',
// //   templateUrl: './step-two.component.html',
// //   styleUrl: './step-two.component.css',
// // })
// // export class StepTwoComponent implements OnInit {
// //   stepTwoForm!: FormGroup;

// //   constructor(private fb: FormBuilder, private router: Router,private Account:AccountService) {}

// //   ngOnInit(): void {
// //     this.stepTwoForm = this.fb.group({
// //       firstName: ['', Validators.required],
// //       lastName: ['', Validators.required],
// //       country: ['', Validators.required],
// //       phone: ['', Validators.required],
// //     });
// //   }
// //   onNext(): void {
// //     if (this.stepTwoForm.valid) {
// //       for (const element in this.stepTwoForm.controls) {
// //         Object.keys(this.stepTwoForm.controls).forEach((key) => {
// //           this.Account.updateFormData(key, this.stepTwoForm.get(key)?.value);
// //         });
// //         // this.Account.updateFormData(element,this.stepTwoForm.controls[element] )
// //         console.log(element);
// //         console.log(this.stepTwoForm.controls[element]);

// //       }
// //       this.router.navigate(['/developer/step-three']);
// //     }
// //   }

// //   goToPreviousStep(): void {
// //     this.router.navigate(['/developer/step-one']);
// //   }
// // }
