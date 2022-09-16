import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonutHttp } from '../interfaces/donut-http';
import { DonutDetails } from '../interfaces/donut-details';

@Injectable({
  providedIn: 'root',
})
export class DonutAPIService {
  donut!: DonutDetails;

  constructor(private http: HttpClient) {}

  getAllDonuts(): Observable<DonutHttp> {
    return this.http.get<DonutHttp>(
      'https://grandcircusco.github.io/demo-apis/donuts.json'
    );
  }

  getDonutDetails(id: number): Observable<DonutDetails> {
    return this.http.get<DonutDetails>(
      `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`
    );
  }
}
