import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

import { environment } from '../../environments/environment';


const baseUrl = environment.apiUrl + '/dbManager'

@Injectable({
  providedIn: 'root'
})
export class DbManagerService {


  constructor(private http: HttpClient) {
  }

  getDbInfo(): Observable<any> {
    return this.http.get(baseUrl + '/info');
  }

  updateUnderOver(): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    const body = {title: 'Update all Sports for all markets in DB.'};
    return this.http.post(baseUrl + '/command/updatesSports', body, {headers})
  }

  getSportsStats(): Observable<any> {
    return this.http.get(baseUrl + '/info/sports/stats')
  }

  updateRunnersStats(): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    const body = {title: 'Update all runner stats in DB.'};
    return this.http.post(baseUrl + '/command/updatesRunnerStats', body, {headers})
  }

  updateRunnersSport(): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    const body = {title: 'Update all runner sport in DB.'};
    return this.http.post(baseUrl + '/command/updatesRunnersSport', body, {headers})
  }
}
