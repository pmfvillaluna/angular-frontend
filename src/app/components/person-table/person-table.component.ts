import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { PersonAddFormComponent } from '../person-add-form/person-add-form.component';
@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.css']
})
export class PersonTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'GWA',
    'dateHired',
    'dob',
    'roleName',
    'action'
  ]
  datePipe: DatePipe = new DatePipe('en-US');

  dataSource = new MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private personService: PersonService, private dialog: MatDialog) {
  }


  getPerson(): void {
    this.personService.getPerson().subscribe({
      next: (personData) => {
        this.dataSource = new MatTableDataSource(personData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
            },
    });
  }


  openPersonForm(){
    const dialogRef = this.dialog.open(PersonAddFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (emittedValue)=>{
        console.log("Emitted is: " + emittedValue)
        if(emittedValue){
          this.getPerson();
        }
      }
    })
  }


  ngAfterViewInit() {
    this.getPerson();
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    this.dataSource.filterPredicate = (data: Person, filter: string) => {
      const fullName = `${data.name.firstName} ${data.name.middleName} ${data.name.lastName}`;
      return fullName.toLowerCase().includes(filter);
    };
  }


  deletePerson(id: number): void{
    this.personService.deletePerson(id).subscribe({
      next: (value)=>{
        alert("Employee with id:"+ id +" is now deleted.")
        this.getPerson();
      },
      error: console.log
    })
  }


  formatRoleNames(row: any): string {
    if (row && row.roleName && row.roleName.length > 0) {
      return row.roleName.join(', ');
    } else {
      return ' - ';
    }
  }

}
