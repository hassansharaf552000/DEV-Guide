export interface IEducation{
  Id?:number|null,
  Degree:string,
  FieldOfStudy:string,
  University:string,
  Faculty?:string|null,
  CountryOfStudy:string,
  StartDate: string; // Using ISO date string format
  EndDate?: string | null; // Allow null for nullable fields
  TillNow?:boolean | null,
}
