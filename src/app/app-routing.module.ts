import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExampleDashboardComponent } from './components/example/example-dashboard/example-dashboard.component';
import { PersonDashboardComponent } from './components/person/person-dashboard/person-dashboard.component';
import { ExampleAddFormComponent } from './components/example/example-add-form/example-add-form.component';
const routes: Routes = [
  {path: 'person', component: PersonDashboardComponent},
  { path: '', redirectTo: '/person', pathMatch: 'full' },
  {path:'sample', component: ExampleDashboardComponent},
  {path:'sample-add', component: ExampleAddFormComponent},
  {path:'sample-add/:id', component: ExampleAddFormComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
