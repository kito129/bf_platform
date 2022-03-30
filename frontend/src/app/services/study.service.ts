import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Basket} from "../model/study/basket/basket";
import {Entry} from "../model/study/entry/entry";
import {Study} from "../model/study/study/study";
import {CompareStudy} from "../model/report/compareStudy";
import {Players} from "../model/study/players/players";


const baseUrl = environment.apiUrl + '/study'
const headers = new HttpHeaders({'Content-Type': 'application/json'})

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  constructor(private http: HttpClient) {}

  /*
  ** BASKET
   */
  getAllBaskets(): Observable<any> {
    return this.http.get(`${baseUrl}/basket/all`);
  }

  createBasket(basket: Basket): Observable<any> {
    return this.http.put(`${baseUrl}/basket/create`,basket,{headers});
  }
  updateBasket(id, basket: Basket): Observable<any> {
    return this.http.post(`${baseUrl}/basket/${id}`,JSON.stringify(basket), {headers});
  }
  deleteBasket(id): Observable<any> {
    return this.http.delete(`${baseUrl}/basket/${id}`,{headers});
  }

  /*
  ** ENTRY
   */
  getAllEntries(): Observable<any> {
    return this.http.get(`${baseUrl}/entry/all`);
  }

  createEntry(entry: Entry): Observable<any> {
    return this.http.put(`${baseUrl}/entry/create`,entry,{headers});
  }
  updateEntry(id, entry: Entry): Observable<any> {
    return this.http.post(`${baseUrl}/entry/${id}`,JSON.stringify(entry), {headers});
  }
  deleteEntry(id): Observable<any> {
    return this.http.delete(`${baseUrl}/entry/${id}`,{headers});
  }

  /*
  ** STUDY
   */
  getAllStudies(): Observable<any> {
    return this.http.get(`${baseUrl}/study/all`);
  }

  createStudy(study: Study): Observable<any> {
    return this.http.put(`${baseUrl}/study/create`,study,{headers});
  }
  updateStudy(id: string, study: Study): Observable<any> {
    return this.http.post(`${baseUrl}/study/${id}`,JSON.stringify(study), {headers});
  }
  deleteStudy(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/study/${id}`,{headers});
  }

  /*
  ** PLAYER
   */

  getAllPlayers(): Observable<any> {
    return this.http.get(`${baseUrl}/players/all`);
  }

  createPlayers(players: Players): Observable<any> {
    return this.http.put(`${baseUrl}/players/create`,players,{headers});
  }
  updatePlayers(id: string, players: Players): Observable<any> {
    return this.http.post(`${baseUrl}/players/${id}`,JSON.stringify(players), {headers});
  }
  deletePlayers(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/players/${id}`,{headers});
  }



  /*
  ** STUDY API SERVICES
   */

  // get study market by market id and price only for selection id
  getStudyMarket(marketId: string, selectionId: number): Observable<any> {
    return this.http.get(`${baseUrl}/marketStudy/${marketId}/${selectionId}`);
  }

  // get all trade in study by study id
  getStudyTrades(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/study/trades/${id}`);
  }

  // get all market in study by study id
  getBasketMarkets(basketId: string): Observable<any> {
    return this.http.get(`${baseUrl}/basket/basketMarkets/${basketId}`);
  }

  getMultipleStudyTrades(id: string[]): Observable<CompareStudy[]> {
    return this.http.get<CompareStudy[]>(`${baseUrl}/studies/trades/${id}`);
  }




}
