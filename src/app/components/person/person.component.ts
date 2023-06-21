import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/models/person';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { PersonService } from 'src/app/services/person.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() selectedPerson?:Person;
  personList!: Person[]; // Assuming you have an array of Person objects

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  selectPerson(person: Person) {
    this.selectedPerson = person;
  }
  isLastElement(role: any, array: any[]): boolean {
    return role === array[array.length - 1];
  }

  getPerson(): void {
    this.personService.getPerson()
    .subscribe(person => this.personList = person);
  }

}
