import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../model/note/note";
import {TennisTournament} from "../model/tennisTournament/tennisTournament";

import {environment} from "../../environments/environment";

const baseUrl = environment.apiUrl + '/tennisTournament'

@Injectable({
  providedIn: 'root'
})
export class TennisTournamentService {

  constructor(private http: HttpClient) { }

  // CRUD TENNIS TOURNAMENTS
  getAllTennisTournaments(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  createTennisTournaments(tennisTournament: TennisTournament): Observable<any> {
    const headers = {'Content-Type': 'application/json'};

    console.log(tennisTournament)

    return this.http.put(`${baseUrl}/create`,tennisTournament,{headers});
  }

  updateTennisTournaments(id,tennisTournament: TennisTournament): Observable<any> {
    const headers = {'Content-Type': 'application/json'};
    const body = JSON.stringify(tennisTournament)
    return this.http.post(`${baseUrl}/${id}`,body, {headers});
  }

  deleteTennisTournaments(id): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete(`${baseUrl}/${id}`,options);
  }


}
