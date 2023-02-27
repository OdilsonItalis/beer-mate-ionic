import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
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
