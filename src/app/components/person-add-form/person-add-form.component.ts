import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { Name } from 'src/app/models/name';
import { Address } from 'src/app/models/address';
import { Role } from 'src/app/models/role';
import { ContactInformation } from 'src/app/models/contact-information';
import { PersonService } from 'src/app/services/person.service';
import { Observable } from 'rxjs';
import { PersonDashboardComponent } from '../person-dashboard/person-dashboard.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent implements OnInit {
  personForm!: FormGroup;
  employmentStatus!: string;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
    private dialogRef: MatDialogRef<PersonAddFormComponent>
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.personForm = this.formBuilder.group({
      id: [null],
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName: '',
        lastName: ['', Validators.required],
        suffix: '',
        title: ''
      }),
      address: this.formBuilder.array([
        this.createAddressFormGroup()
      ], Validators.required),
      birthday: ['', Validators.required],
      GWA: [null],
      dateHired: [''],
      isEmployed: ['', Validators.required],
      contactInformation: this.formBuilder.array([
        this.createContactInformationFormGroup()
      ], Validators.required),
      roles: this.formBuilder.array([
        this.createRoleFormGroup()
      ])
    });
  }

  createAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      streetNumber: '',
      barangay: '',
      city: '',
      zipCode: ''
    });
  }

  createContactInformationFormGroup(): FormGroup {
    return this.formBuilder.group({
      landline: '',
      mobileNumber: '',
      email: ''
    });
  }

  createRoleFormGroup(): FormGroup {
    return this.formBuilder.group({
      roleName: ['']
    });
  }

  onSubmit() {
    if (this.personForm.valid) {
      const personData: Person = this.personForm.value;
      this.personService.addEmployee(personData).subscribe({
        next: (value: any) => {
          console.log("Person Added", personData);
          alert('Person Added');
          this.dialogRef.close(true);
        },
        error: console.log
      });
    }
  }

  onCancel() {
    // Handle cancel logic here
  }

  get addressControls(): FormArray {
    return this.personForm.get('address') as FormArray;
  }

  addAddress(): void {
    this.addressControls.push(this.createAddressFormGroup());
  }

  removeAddress(index: number): void {
    this.addressControls.removeAt(index);
  }

  get contactControls(): FormArray {
    return this.personForm.get('contactInformation') as FormArray;
  }

  addContact(): void {
    this.contactControls.push(this.createContactInformationFormGroup());
  }

  removeContact(index: number): void {
    this.contactControls.removeAt(index);
  }

  get roleControls(): FormArray {
    return this.personForm.get('roles') as FormArray;
  }

  addRole(): void {
    this.roleControls.push(this.createRoleFormGroup());
  }

  removeRole(index: number): void {
    this.roleControls.removeAt(index);
  }
}
