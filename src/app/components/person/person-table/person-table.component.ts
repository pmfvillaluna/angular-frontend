import {AfterViewInit, Component, Inject, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
    'gwa',
    'dateHired',
    'dob',
    'roleName',
    'action'
  ]
  sortedData: Person[] = [];
  datePipe: DatePipe = new DatePipe('en-US');

  dataSource = new MatTableDataSource<Person>;

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  @Inject(MAT_DIALOG_DATA) private data: any;

  constructor(private personService: PersonService, private dialog: MatDialog) {}

  getPerson(): void {
    this.personService.getPerson().subscribe({
      next: (personData) => {
        this.dataSource = new MatTableDataSource(personData);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

        this.dataSource.sortingDataAccessor = (item, property) =>{
          switch(property){
            case 'lastName': return item.name.lastName;
            case 'gwa': return item['gwa'];
            case 'dateHired': return item.dateHired;
            default: return item[property];
          }
        }
      },
    });
  }

  openAddPersonForm() {
    const dialogRef = this.dialog.open(PersonAddFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (emittedValue) => {
        if (emittedValue) {
          this.getPerson();
        }
      }
    });
  }

  openEditPersonForm(personData: FormData) {
    console.log("PERSON TABLE COMING AT YOU ", personData)

    const dialogRef = this.dialog.open(PersonAddFormComponent, {
      data: personData,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          console.log("CLOSED AND FETCHING")
          this.getPerson();
        }
      },
    });
  }

  ngAfterViewInit() {
    this.getPerson();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    this.dataSource.filterPredicate = (item: Person, filter: string) => {
      return this.doesItemMatchFilter(item, filter);
    };

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  doesItemMatchFilter(item: any, filter: string): boolean {
    for (const key in item) {
      if (typeof item[key] === 'string') {
        if (item[key].toLowerCase().includes(filter)) {
          return true;
        }
      } else if (typeof item[key] === 'object' && item[key] !== null) {
        if (this.doesItemMatchFilter(item[key], filter)) {
          return true;
        }
      } else if (typeof item[key] === 'number') {
        const numberString = item[key].toString();
        if (numberString.toLowerCase().includes(filter)) {
          return true;
        }
      }
    }

    // Check for specific properties within the name object
    if (item.name && typeof item.name === 'object') {
      for (const nameKey in item.name) {
        if (typeof item.name[nameKey] === 'string') {
          if (item.name[nameKey].toLowerCase().includes(filter)) {
            return true;
          }
        }
      }
    }

    return false;
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
}
