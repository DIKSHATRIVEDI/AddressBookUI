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
  
  fullName: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  zip: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() addPerson = new EventEmitter<any>(); 

  closeForm() {
    this.close.emit(); // Notify parent component
  }

  submitForm() {
    const newPerson = {
      fullname: this.fullName,
      phone: this.phone,
      address: this.address,
      city: this.city,
      state: this.state,
      zip: this.zip
    };
    this.addPerson.emit(newPerson); // Send data to parent
    this.closeForm(); // Close form after adding
  }
  
}
