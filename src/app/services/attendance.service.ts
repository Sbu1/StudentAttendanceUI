import { Injectable } from '@angular/core';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor() { }

  //get attendance list
  getAttendanceRecords(): Register[] {
    return [
      { id: 1,  dateCreated: new Date(), students: []},
      { id: 2,  dateCreated: new Date(), students: []},
      { id: 3,  dateCreated: new Date(), students: []},
      { id: 4,  dateCreated: new Date(), students: []}
    ];
  }
}
