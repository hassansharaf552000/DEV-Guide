export interface ExperienceViewModel {
    fieldOfStudy: string;
    organization: string;
    startDate: Date;
    endDate?: Date;            // Optional property
    tillNow?: boolean; 
}
