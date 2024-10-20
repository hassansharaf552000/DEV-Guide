export interface IEducation{
  Id?:number,
  Degree:string,
  FieldOfStudy:string,
  University:string,
  Faculty?:string,
  CountryOfStudy:string,
  StartDate:Date,
  EndDate?:Date,
  TillNow?:boolean,
}
