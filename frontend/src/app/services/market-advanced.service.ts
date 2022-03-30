import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';


const baseUrl = environment.apiUrl + '/marketsAdvanced'


@Injectable({
  providedIn: 'root'
})
export class MarketAdvancedService {

  constructor(private http: HttpClient) { }

  getMarketsAdvancedList(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  getMarketAdvancedDetailById(marketId): Observable<any> {
    return this.http.get(`${baseUrl}/detail/${marketId}`);
  }


  getAllMarketsInfoByName(name: string): Observable<any> {
    if(name.length) {
      return this.http.get(`${baseUrl}/findByName/${name}`);
    } else {
      return this.http.get(`${baseUrl}/findByName/.`);
    }
  }

  getMarketMetalistAdvanced(): Observable<any> {
    return this.http.get(`${baseUrl}/metaList`);
  }


  chekMarketAdvancedPreset(marketId: string): Observable<any> {
    return this.http.get(`${baseUrl}/present/${marketId}`);
  }


}
