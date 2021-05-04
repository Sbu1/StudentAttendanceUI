import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeDetailsComponent } from './components/grade-details/grade-details/grade-details.component';
import { GradesListComponent } from './components/grades-list/grades-list/grades-list.component';

const routes: Routes = [
  { path: '', component: GradesListComponent },
  { path: 'grade/:id/details', component: GradeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
