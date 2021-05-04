import { Injectable } from '@angular/core';
import { Grade } from '../models/grade.model';

@Injectable({
  providedIn: 'root'
})
export class GradesService {

  constructor() { }

  //get grades list
  getGrades(): Grade[] {
    return [
      { id: 1, name: 'Grade 7A' },
      { id: 2, name: 'Grade 10B' },
      { id: 3, name: 'Graed 9C' },
      { id: 4, name: 'Grade 12D' },
    ]
  }

  // get grade
  getGrade(id:number): any {
    console.log(id);
  }
}
