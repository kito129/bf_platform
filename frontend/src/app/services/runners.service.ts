import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import { environment } from '../../environments/environment';


const baseUrl = environment.apiUrl + '/runners'

@Injectable({
  providedIn: 'root'
})
export class RunnersService {

  constructor(private http: HttpClient) { }

  getAllRunners(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  getRunnerById(id): Observable<any> {
    return this.http.get(`${baseUrl}/detail/${id}`);
  }


}
