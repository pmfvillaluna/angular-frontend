import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule} from '@angular/material/dialog';
import { MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PersonComponent } from './components/person/person.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonDashboardComponent } from './components/person-dashboard/person-dashboard.component';
import { PersonAddFormComponent } from './components/person-add-form/person-add-form.component';
import { PersonTableComponent } from './components/person-table/person-table.component';

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatRadioModule,
    MatPaginatorModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonDetailsComponent,
    PersonComponent,
    PersonDashboardComponent,
    PersonAddFormComponent,
    PersonTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
