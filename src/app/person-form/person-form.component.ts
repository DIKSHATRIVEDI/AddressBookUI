import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './person-form.component.html',
  styleUrl: './person-form.component.css'
})
export class PersonFormComponent{ 
  name: string = '';
  email: string = '';
  phoneNumber: string = '';
  
  @Output() close = new EventEmitter<void>();
  @Output() addPerson = new EventEmitter<any>(); 

  closeForm() {
    this.close.emit(); // Notify parent component
  }

  submitForm() {
    const newPerson = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber
    };
    this.addPerson.emit(newPerson); // Send data to parent
    this.closeForm(); // Close form after adding
  }
  
}
