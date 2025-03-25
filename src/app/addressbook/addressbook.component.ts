import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from '../person-form/person-form.component';
import { Person } from '../models/person.model';
import { AddressbookService } from '../addressbook.service';

@Component({
  selector: 'app-addressbook',
  imports: [MatIconModule, MatTableModule, CommonModule, PersonFormComponent],
  templateUrl: './addressbook.component.html',
  styleUrls: ['./addressbook.component.css'],
})
export class AddressBookComponent implements OnInit {
  persons: Person[] = [];
  editingPerson: Person | null = null;
  
  constructor(private addressBookService: AddressbookService) {}
  
  isFormVisible = false;
  
  showForm() {
    this.isFormVisible = true;
    this.editingPerson = null;
  }

  closeForm() {
    this.isFormVisible = false;
  }

  ngOnInit(): void {
    this.getAllPersons();
  }

  // Fetch all persons from backend
  getAllPersons(): void {
    this.addressBookService.getAllEntries().subscribe(
      (data:Person[]) => {
        this.persons = data;
      },
      (error) => {
        console.error('Error fetching persons:', error);
      }
    );
  }

  // Add a new person
  addPersonToList(person: Person): void {
    this.addressBookService.createEntry(person).subscribe({
      next: (newPerson) => { console.log('Person added:', newPerson); },
      error: (error) => { console.error('Error:', error); },
      complete: () => { console.log('Request completed'); }
    });
    
  }

  // Edit a person
  editPerson(person: Person): void {
    this.editingPerson = person;
    this.isFormVisible = true;
  }

  // Delete a person
  deletePerson(person: { id?: number }) {
    if (person.id !== undefined) {
      this.addressBookService.deleteEntry(person.id).subscribe({
        next: () => { 
          console.log('Person deleted successfully'); 
        },
        error: (error) => { 
          console.error('Error deleting person:', error); 
        },
        complete: () => { 
          console.log('Delete request completed'); 
        }
      });
    } else {
      console.error('Error: Person ID is undefined');
    }
  }
  
}
