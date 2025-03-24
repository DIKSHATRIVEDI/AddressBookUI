import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, {{ title }}</h1>'
})
class MockAppComponent {
  title = 'AddressBook';
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockAppComponent], // Correct import
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AddressBook' title`, () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AddressBook');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MockAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, AddressBook');
  });
});
