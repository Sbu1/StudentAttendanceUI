import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Register } from 'src/app/models/register.model';
import { AttendanceService } from 'src/app/services/attendance.service';

@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.css']
})
export class GradeDetailsComponent implements OnInit {
  gradeId: number;
  registers: Register[];
  constructor(private route: ActivatedRoute, private _attendanceService: AttendanceService) { }

  ngOnInit(): void {
    this.gradeId = +(this.route.snapshot.paramMap.get("id"));
    this.getAttendanceEntries();
  }

  // get attendance register
  getAttendanceEntries(): any {
    this.registers = this._attendanceService.getAttendanceRecords();
  }

}
