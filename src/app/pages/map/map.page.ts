import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
  darkMode: boolean = false;

  constructor() {}

  toggleDarkMode() {
    const bodyClass = document.body.className;
    if(bodyClass) {
      document.body.classList.remove('dark');
      this.darkMode = false;
    } else {
      document.body.classList.add('dark');
      this.darkMode = true;
    }
  }
}
