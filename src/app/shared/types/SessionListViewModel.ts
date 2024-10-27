export enum BookingStatus
{
    Completed = 1,
    Pending,
    Canceled,
}

export interface SessionListViewModel {
    Id:number,
    Topic: string,
    DateTime:Date,
    Status:BookingStatus,
    User_Id:string,
    User_Instructor_Id:string
 }