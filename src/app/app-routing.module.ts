import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SampleTableComponent } from './components/example/sample-table/sample-table.component';
import { PersonDashboardComponent } from './components/person/person-dashboard/person-dashboard.component';
const routes: Routes = [
  {path: 'person', component: PersonDashboardComponent},
  { path: '', redirectTo: '/person', pathMatch: 'full' },
  {path:'sample', component: SampleTableComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
