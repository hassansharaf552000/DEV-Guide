export interface Profile {
    id?: string;          // Optional string
    name: string;         // Required string
    cv?: string;          // Optional string
    country?: string;     // Optional string
    degree?: string;      // Optional string
    fieldOfStudy?: string; // Optional string
    university?: string;  // Optional string
    countryOfStudy?: string; // Optional string
    startDate?: Date;     // Optional Date object
    endDate?: Date;       // Optional Date object
    yearsOfExperience?: number; // Optional number
    level?: string;       // Optional string
    image?: string;       // Optional string
    price?: number;       // Optional number (use number for decimal)
  }
