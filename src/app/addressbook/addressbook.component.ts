import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from '../person-form/person-form.component';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-addressbook',
  imports: [MatIconModule, MatTableModule, CommonModule, PersonFormComponent],
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css'],
})
export class AddressBookComponent {
  persons: Person[] = [];
  
  isFormVisible = false;
  
  showForm() {
    this.isFormVisible = true;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  addPersonToList(person: any) {
    console.log('Before adding:', this.persons);
    this.persons = [...this.persons, person]; // Spread operator creates a new array
    console.log('After adding:', this.persons);
    this.closeForm(); // Hide form after adding data
  }

  editPerson(person: Person) {
    console.log('Edit:', person);
  }

  deletePerson(person: Person) {
    this.persons = this.persons.filter(p => p !== person);
  }
}
