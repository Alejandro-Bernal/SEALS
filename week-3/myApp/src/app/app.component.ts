import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myApp';
  firstName = 'Alejandro';
  lastName = 'Bernal';
  // What do we need from the user?
  age = '';
  // One way data bind
  todos = ['Eat Breakfast', 'Take a Shower', 'Code challenge'];
  imageShows = false;

  displayImage() {
    this.imageShows = true;
  }
}
