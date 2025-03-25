import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  private baseUrl = 'http://localhost:8080/addressbook';

  constructor(private http: HttpClient) {}

  getAllEntries(): Observable<Person[]> {
    return this.http.get<Person[]>(`${this.baseUrl}/all`);
  }

  getEntryById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.baseUrl}/${id}`);
  }

  createEntry(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.baseUrl}/create`, person);
  }

  updateEntry(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/update/${id}`, person);
  }

  deleteEntry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}
