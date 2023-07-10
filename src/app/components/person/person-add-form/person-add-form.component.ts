import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';

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
    private dialogRef: MatDialogRef<PersonAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.initializeForm();
    if (this.data) {
      this.personForm.patchValue(this.data);
      console.log("Data is", JSON.stringify(this.data));
    }
  }


  initializeForm() {
    this.personForm = this.formBuilder.group({
      id: [null],
      name: this.formBuilder.group({
        firstName: ['', Validators.required],
        middleName: null,
        lastName: ['', Validators.required],
        suffix: null,
        title: ['', Validators.required]
      }),
      address: this.formBuilder.array([
        this.createAddressFormGroup()
      ], Validators.required),
      birthday: [null, Validators.required],
      gwa: [null],
      dateHired: null,
      employed: [false, Validators.required],
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
      streetNumber: [null, Validators.required],
      barangay: null,
      city: null,
      zipCode: null
    });
  }

  createContactInformationFormGroup(): FormGroup {
    return this.formBuilder.group({
      landline: [null,  [Validators.required, Validators.pattern('[0-9\-]*')] ],
      mobileNumber: [null,  [Validators.required, Validators.pattern('[0-9\-]*')]],
      email: [null, [Validators.required, Validators.email]]
    });
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


  createRoleFormGroup(): FormGroup {
    return this.formBuilder.group({
      roleName: [null]
    });
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

  onFormSubmit() {
    console.log("Data is", JSON.stringify(this.data));
    if (this.personForm.valid) {
      const formData = this.personForm.value; // Use form data from personForm
      if (this.data) {

        this.personService.updatePerson(formData).subscribe({
          next: (value: any) => {
            console.log("inside updatePerson")
            alert('Person Updated');
            this.dialogRef.close(true);
          },
          error: console.log
        });
      } else {
        console.log("in personform valid false")
        this.personService.addPerson(formData).subscribe({
          next: (value: any) => {
            console.log("inside PersonAdd")
            console.log("Person Added", formData);
            alert('Person Added');
            this.dialogRef.close(true);
          },
          error:()=>{
            alert('Person was not created. Please try again.')
          }
        });
      }
    }else{
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
