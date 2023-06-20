import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { Name } from 'src/app/models/name';
import { Address } from 'src/app/models/address';
import { Role } from 'src/app/models/role';
import { ContactInformation } from 'src/app/models/contact-information';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent implements OnInit {
  personForm!: FormGroup;
  employmentStatus!: string;

  constructor(private formBuilder: FormBuilder) {
    this.personForm = this.formBuilder.group({
      id: [null],
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName: '',
        lastName: [''],
        suffix: '',
        title: ''
      }),
      address: this.formBuilder.group({
        streetNumber: '',
        barangay: '',
        city: '',
        zipCode: ''
      }),
      birthday: '',
      GWA: [null],
      dateHired: '',
      isEmployed: '',
      contactInformation: this.formBuilder.group({
        landline: '',
        mobileNumber: '',
        email: ''
      }),
      roleNames: this.formBuilder.group({
        roleName: ['']
      })
    });
   }

  ngOnInit() {

  }

  onSubmit() {
    if (this.personForm.valid) {
      const personData: Person = this.personForm.value;
      console.log(personData);
    }
  }

  onCancel() {
    // Implement your cancel logic here
  }
    // Method to add a new roleName input field
    addRoleName() {
      const roleNameGroup = this.formBuilder.group({
        roleName: [''], // you can provide a default value here if needed
      });
      (this.personForm.get('roleNames') as FormArray).push(roleNameGroup);
    }

    // Method to remove a roleName input field
    removeRoleName(index: number) {
      (this.personForm.get('roleNames') as FormArray).removeAt(index);
    }
}
