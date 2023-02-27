import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  darkMode: boolean = false;


  list: any = [];

  constructor(
    private dataService: DataService
  ) { }

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

  ngOnInit() {
    this.list = this.dataService.getBeers();
  }

}
