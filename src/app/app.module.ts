import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradesListComponent } from './components/grades-list/grades-list/grades-list.component';
import { GradeDetailsComponent } from './components/grade-details/grade-details/grade-details.component';
import { GradesService } from './services/grades.service';
import { AttendanceListComponent } from './components/attendanceList/attendance-list/attendance-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GradesListComponent,
    GradeDetailsComponent,
    AttendanceListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GradesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
