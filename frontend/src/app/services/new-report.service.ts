import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewTrade} from '../model/report/new/newTrade';

const headers = {'Content-Type': 'application/json'};

const baseUrl = environment.apiUrl + '/newReport'

@Injectable({
  providedIn: 'root'
})
export class NewReportService {

  constructor(private http: HttpClient) { }

  // CRUD TRADE
  getAllNewTrades(): Observable<any> {
    return this.http.get(`${baseUrl}/newTrade/all`);
  }

  updateNewTrade(trade: NewTrade): Observable<any> {
    const body = JSON.stringify(trade)
    return this.http.post(`${baseUrl}/newTrade/update/${trade._id}`,body, {headers})
  }
}
