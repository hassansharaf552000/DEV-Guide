import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ISkill } from '../../../core/enums/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private getUserSkillsUrl = 'http://localhost:5164/api/Account/GetAllSkills'; // API to get skills of the logged-in user
  private getAllSkillsUrl = 'http://localhost:5164/api/Account/GetAll'; // API to get all skills from the database
  private adduserskills = 'http://localhost:5164/api/Account/AddSkill'
  private deleteuserskills = 'http://localhost:5164/api/Account/DeleteSkill'

  adminaddSkillUrl="http://localhost:5164/api/Account/AddSkill"

  constructor(private http: HttpClient) {}

  // Fetch all skills of the logged-in user
  getUserSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.getUserSkillsUrl).pipe(
      tap((skills) => {
        console.log('API response for user skills:', skills); // Log the response
      })
    );
  }


  // Fetch all available skills from the database
  getAllSkills(): Observable<ISkill[]> {
    return this.http.get<ISkill[]>(this.getAllSkillsUrl);
  }

  addSkill(skill: ISkill): Observable<ISkill> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<ISkill>(this.adduserskills, skill, { headers });
  }

  // Function to delete a skill by ID
  deleteSkill(skillId: number): Observable<any> {
    const url = `${this.deleteuserskills}/${skillId}`;
    return this.http.delete(url);
  }


getAll(){
  return this.http.get("http://localhost:5164/api/Skill/GetAll")
}

adminaddSkill(skill: any): Observable<any> {
  return this.http.post(this.adminaddSkillUrl, skill, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}
}


