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

  public item: Observable<Beer> | null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {
    // this.item = new Observable();
    this.item = null;
  }

  ngOnInit() {
    this.item = this.dataService.getBeerById(this.route.snapshot.params['id']).pipe(tap((response: any) => {
      console.log('🚀 ~ file: detail.page.ts:46 ~ DetailPage ~ response', response);
    }));
  }

}
