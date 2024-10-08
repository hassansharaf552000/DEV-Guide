import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private Http :HttpClient) { }
getAll(){
  return this.Http.get("http://localhost:5164/api/Skill/GetAll")
}
}


