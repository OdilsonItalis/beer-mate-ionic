import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable, tap } from 'rxjs';
import { Beer, DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  darkMode: boolean = false;

  public item: Observable<Beer> | null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    // this.item = new Observable();
    this.item = null;
  }

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
    this.item = this.dataService.getBeerById(this.route.snapshot.params['id']).pipe(tap((response: any) => {
      console.log('🚀 ~ file: detail.page.ts:46 ~ DetailPage ~ response', response);
    }));
  }

}
