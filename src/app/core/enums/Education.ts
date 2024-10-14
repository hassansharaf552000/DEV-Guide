export interface IEducation{
  id?:number,
  degree:string,
  fieldOfStudy:string,
  university:string,
  faculty?:string,
  countryOfStudy:string,
  startDate:Date,
  endDate?:Date,
  tillNow?:boolean,
}
