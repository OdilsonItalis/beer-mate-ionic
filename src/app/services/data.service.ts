import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

export interface Beer {
  description: string;
  id: number;
  image_url: string;
  name: string;
  tagline: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getBeers(): Observable<Beer[]> {
    return this.http.get(environment.apiUrl).pipe(map((response: any) => {
      return response.map((beer: any) => this.mapResponse(beer));
    }));
  }

  public getBeerById(id: number): Observable<Beer> {
    return this.http.get(`${environment.apiUrl}/${id}`).pipe(map((response: any) => {
      return response.map((beer: any) => this.mapResponse(beer))[0];
    }));
  }

  private mapResponse(beer: any): Beer {
    return {
      description: beer.description,
      image_url: beer.image_url,
      id: beer.id,
      name: beer.name,
      tagline: beer.tagline
    }
  }
}
