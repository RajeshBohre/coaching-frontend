import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SyudentBacklogComponent } from './syudent-backlog/syudent-backlog.component';

const routes: Routes = [
  { path: '', redirectTo: '/monthlyExpenses', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path : 'registration', component: StudentRegistrationComponent},
  {path: 'studentlist', component: StudentListComponent},
  {path: 'studentfee', component: StudentFeeComponent},
  {path: 'backlog', component: SyudentBacklogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
