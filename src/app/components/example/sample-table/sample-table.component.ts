import { Component, AfterViewInit, ViewChild, Inject} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Person } from 'src/app/models/person';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-sample-table',
  templateUrl: './sample-table.component.html',
  styleUrls: ['./sample-table.component.css']
})
export class SampleTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'firstName', 'gwa', 'roles'];
  personDataSource = new MatTableDataSource<Person>();
  sortedData: Person[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @Inject(MAT_DIALOG_DATA) private data: any;

  constructor(private personService: PersonService, private dialog: MatDialog) {

  }

  ngAfterViewInit() {
    this.getPersonList();
    this.personDataSource.sort = this.sort;
    this.personDataSource.paginator = this.paginator;
  }

  getPersonList(): void{
    this.personService.getPerson().subscribe({
      next: (personData) =>{
        this.personDataSource = new MatTableDataSource(personData);
        this.personDataSource.sort = this.sort;
        this.personDataSource.paginator = this.paginator;
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.personDataSource.filter = filterValue;

    if (this.personDataSource.paginator) {
      this.personDataSource.paginator.firstPage();
    }

    this.personDataSource.filterPredicate = (data: Person, filter: string) => {
      const fullName = `${data.name.firstName} ${data.name.middleName} ${data.name.lastName}`;
      return fullName.toLowerCase().includes(filter);
    };

    // Apply the filter to the sorted data array
    this.sortedData = this.personDataSource.filteredData.slice();
    this.sortedData.sort((a, b) => a.id - b.id); // Sort the filtered data array by id
  }

  deletePerson(id: number): void{
    console.log("Person id is: " + id);
  }

  formatRoleNames(row: any): string {
    if (row && row.roleName && row.roleName.length > 0) {
      return row.roleName.join(', ');
    } else {
      return ' - ';
    }
  }
}




