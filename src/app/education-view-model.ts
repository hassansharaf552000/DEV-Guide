// education.model.ts
export interface EducationViewModel {
    degree: string;
    fieldOfStudy: string;
    university: string;
    faculty?: string;           // Optional property
    countryOfStudy: string;
    startDate: Date;
    endDate?: Date;            // Optional property
    tillNow?: boolean;         // Optional property
}

