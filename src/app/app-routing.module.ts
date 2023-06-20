import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonAddFormComponent } from './components/person-add-form/person-add-form.component';
import { PersonComponent } from './components/person/person.component';
import { PersonDashboardComponent } from './components/person-dashboard/person-dashboard.component';
const routes: Routes = [
  {path: 'person', component: PersonDashboardComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
