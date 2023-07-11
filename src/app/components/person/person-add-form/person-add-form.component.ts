import { Component, OnChanges, OnInit } from '@angular/core';
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
      console.log("Data in the edited form", JSON.stringify(this.data));
      this.populateFormWithTableData();
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
      roleName: this.formBuilder.array([''])
    });
  }



  createContactInformationFormGroup(): FormGroup {
    return this.formBuilder.group({
      landline: [null,  [Validators.required, Validators.pattern('[0-9\-]*')] ],
      mobileNumber: [null,  [Validators.required, Validators.pattern('[0-9\-]*')]],
      email: [null, [Validators.required, Validators.email]]
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


  get roleFormArray(): FormArray {
    return this.personForm.get('roleName') as FormArray;
  }

  addRole(): void {
    this.roleFormArray.push(new FormControl(''));
  }

  removeRole(index: number): void {
    this.roleFormArray.removeAt(index);
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

  populateFormWithTableData() {
    const { id, name, address, birthday, gwa, dateHired, employed, contactInformation, roleName } = this.data;

    this.personForm.get('name.firstName')?.patchValue(name.firstName);
    this.personForm.get('name.middleName')?.patchValue(name.middleName);
    this.personForm.get('name.lastName')?.patchValue(name.lastName);
    this.personForm.get('name.suffix')?.patchValue(name.suffix);
    this.personForm.get('name.title')?.patchValue(name.title);

    const addressArray = this.personForm.get('address') as FormArray;
    addressArray.clear();
    for (const addr of address) {
      const addressFormGroup = this.createAddressFormGroup();
      addressFormGroup.patchValue(addr);
      addressArray.push(addressFormGroup);
    }

    this.personForm.get('birthday')?.patchValue(birthday);
    this.personForm.get('gwa')?.patchValue(gwa);
    this.personForm.get('dateHired')?.patchValue(dateHired);
    this.personForm.get('employed')?.patchValue(employed);

    const contactInfoArray = this.personForm.get('contactInformation') as FormArray;
    contactInfoArray.clear();
    for (const contact of contactInformation) {
      const contactFormGroup = this.createContactInformationFormGroup();
      contactFormGroup.patchValue(contact);
      contactInfoArray.push(contactFormGroup);
    }

    const roleNameArray = this.personForm.get('roleName') as FormArray;
    roleNameArray.clear();
    for (const role of roleName) {
      roleNameArray.push(new FormControl(role));
    }
  }


}
