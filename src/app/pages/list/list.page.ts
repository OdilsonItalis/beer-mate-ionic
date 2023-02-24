import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list: any = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.list = this.dataService.getBeers();
  }

}
