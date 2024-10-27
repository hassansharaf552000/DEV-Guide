export interface IExperience{
  Id?:number|null,
  FieldOfStudy:string,
  Organization:string,
  StartDate:string,
  EndDate?:string | null,
  TillNow?:boolean | null,
}
