import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'animals', component:AnimalsComponent},
  {path:'employees', component:EmployeeComponent},
  {path:'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
