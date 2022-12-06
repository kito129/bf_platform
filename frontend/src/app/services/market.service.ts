import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';


const headers = {'Content-Type': 'application/json'};
const baseUrl = environment.apiUrl + '/markets'

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(private http: HttpClient) {}

  getAllMarketsInfo(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  getAllMarketsInfoBySport(sport): Observable<any> {
    return this.http.get(`${baseUrl}/all/${sport}`);
  }

  getMarketDetailById(id): Observable<any> {
    return this.http.get(`${baseUrl}/detail/${id}`);
  }

  getInfoByMarketId(id): Observable<any> {
    return this.http.get(`${baseUrl}/info/${id}`);
  }

  getSelectionsByMarketId(id): Observable<any> {
    return this.http.get(`${baseUrl}/selection/${id}`);
  }

  getPricesByMarketId(id): Observable<any> {
    return this.http.get(`${baseUrl}/prices/${id}`);
  }

  getUpdatesByMarketId(id): Observable<any> {
    return this.http.get(`${baseUrl}/updates/${id}`);
  }

  getMarketOfSameMatch(id): Observable<any> {
    return this.http.get(`${baseUrl}/sameMatch/${id}`);
  }

  getMarketsByRunnerId(runnerId): Observable<any> {
    return this.http.get(`${baseUrl}/byRunner/${runnerId}`);
  }

  getMarketMetalistTennis(): Observable<any> {
    return this.http.get(`${baseUrl}/metalist/tennis`);
  }

  getMarketMetalistSoccer(): Observable<any> {
    return this.http.get(`${baseUrl}/metalist/soccer`);
  }

  getMarketIdByNameAndDate(name: string, date: number, eventName: string): Observable<any> {
    const body = JSON.stringify({
      name,
      date,
      eventName
    })
    return this.http.post(`${baseUrl}/marketIdByNameAndDate`,body, {headers})
  }



}
