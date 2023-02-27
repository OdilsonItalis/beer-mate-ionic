import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
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
