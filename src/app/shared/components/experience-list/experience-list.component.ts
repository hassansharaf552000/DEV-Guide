import { MatDialog } from "@angular/material/dialog";
import { AddExperienceComponent } from "../add-experience/add-experience.component";
import { IExperience } from "../../../core/enums/Experience";
import { Component } from "@angular/core";
import { ExperienceService } from "../../services/Experience/experience.service";
@Component({
  selector: 'app-experience-list',  // The selector for this component
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})

export class ExperienceListComponent {
  // experienceList: IExperience[] = [
  //   {
  //     job: 'developer',
  //     organization: 'any organization',
  //     startDate: new Date(2015, 8, 1),  // Month is 0-indexed, so September is 8
  //     endDate: new Date(2019, 5, 15),
  //     tillNow: false
  //   },
  //   {
  //     job: 'hr',
  //     organization: 'Data Science',
  //     startDate: new Date(2015, 8, 1),
  //     endDate: new Date(2019, 5, 15),
  //     tillNow: true
  //   }
  // ];

  // constructor(private MatDialog: MatDialog) {}

  // // Method to open the "Add Experience" dialog
  // openAddExperienceDialog(): void {
  //   const dialogRef = this.MatDialog.open(AddExperienceComponent, {
  //     width: '400px'
  //   });

  //   // After the dialog is closed, handle the result
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Append the new experience entry to the list
  //       this.experienceList.push(result);
  //     }
  //   });
  // }

  experienceList: IExperience[] = [];  // Initialize empty array

  constructor(private MatDialog: MatDialog, private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.fetchExperiences();
  }

  // Fetch experiences from the API
  fetchExperiences(): void {
    this.experienceService.getAllExperiences().subscribe(
      (experiences: IExperience[]) => {
        this.experienceList = experiences;
      },
      (error) => {
        console.error('Error fetching experiences', error);
      }
    );
  }

  // Method to open the "Add Experience" dialog
  openAddExperienceDialog(): void {
    const dialogRef = this.MatDialog.open(AddExperienceComponent, {
      width: '400px'
    });

    // After the dialog is closed, handle the result
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Append the new experience entry to the list
        this.experienceList.push(result);
      }
    });
  }
}
