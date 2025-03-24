import { Component } from '@angular/core';
import { AddressBookComponent } from './addressbook/addressbook.component';

@Component({
  selector: 'app-root',
  imports: [AddressBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
}
