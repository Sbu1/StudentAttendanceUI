import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GradesService } from 'src/app/services/grades.service';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.css']
})
export class GradesListComponent implements OnInit {
  grades: any[];
  constructor(private _gradesService: GradesService, private _router: Router) { }

  ngOnInit(): void {
    this.grades = this._gradesService.getGrades();
    console.log(this.grades);
  }

  gradeDetails(gradeId:number) {
    this._router.navigateByUrl(`/grade/${gradeId}/details`);
  }

}
