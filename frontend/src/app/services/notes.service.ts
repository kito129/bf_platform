import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../model/note/note";

import { environment } from '../../environments/environment';

const baseUrl = environment.apiUrl + '/notes'
const headers = {'Content-Type': 'application/json'};

@Injectable({
  providedIn: 'root'
})
export class NotesService {


  constructor(private http: HttpClient) { }

  // CRUD NOTES
  getAllNotes(): Observable<any> {
    return this.http.get(`${baseUrl}/all`);
  }

  createNotes(runnerNote: Note): Observable<any> {
    return this.http.put(`${baseUrl}/create`,runnerNote,{headers});
  }

  updateNotes(id, runnerNote: Note): Observable<any> {
    const body = JSON.stringify(runnerNote)
    return this.http.post(`${baseUrl}/${id}`,body, {headers});
  }

  deleteNotes(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {headers});
  }


}
