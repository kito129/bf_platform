import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as marketActions from '../store/markets/markets.actions';
import * as runnerActions from '../store/runners/runners.action';
import * as notesActions from '../store/notes/notes.actions';
import * as tennisTournamentActions from '../store/tennis-tournament/tennisTournament.actions';
import * as reportActions from '../store/report/report.actions';
import * as basketsActions from '../store/study/basket/basket.actions';
import * as entryActions from '../store/study/entry/entry.actions';
import * as studyActions from '../store/study/study/study.actions';
import * as playersActions from '../store/study/players/players.actions';

import * as marketAdvancedActions from '../store/marketsAdvanced/marketAdvanced.actions';


const baseUrl = environment.apiUrl + '/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router,
              private readonly store: Store) {
  }

  private static setSession(authResult) {
    localStorage.setItem('token', authResult);
    localStorage.setItem('isLoggedin', 'true');
  }

  login(email:string, password:string, url: string ) {
    this.http.post<any>(`${baseUrl}/login`, {email, password}, {observe: 'response'}).subscribe(
      (data) => {
        if(data.status===200){
          console.log(data.body);
          AuthService.setSession(data.body.token)

          if (localStorage.getItem('isLoggedin')) {
            this.router.navigate([url]);
          }

          this.callDataAfterFirstLogin()

          // this.router.navigateByUrl('/');
        } else if(data.status===401){
          console.log('unauthorized')

        }

      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedin');
    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  callDataAfterFirstLogin(){
    // get all data
    this.store.dispatch(notesActions.getAllRunnersNotes())
    this.store.dispatch(tennisTournamentActions.getAllTennisTournament())
    this.store.dispatch(reportActions.getAllStrategies())
    this.store.dispatch(reportActions.getAllTrades())
    // this.store.dispatch(basketsActions.getAllBaskets())
    // this.store.dispatch(entryActions.getAllEntries())
    // this.store.dispatch(studyActions.getAllStudies())
    // this.store.dispatch(playersActions.getAllPlayers())

    this.store.dispatch(runnerActions.getAllRunners())
    this.store.dispatch(marketActions.getAllFilterBasket())


    this.store.dispatch(reportActions.getAllNewTrades())


    // this.store.dispatch(marketActions.getAllMarkets())
    // this.store.dispatch(marketAdvancedActions.getMarketsAdvancedList())


    setTimeout(() =>
      {
        // this.store.dispatch(marketAdvancedActions.getMarketMetalistAdvanced())
         this.store.dispatch(marketActions.getMarketMetalistBasic())
      },
      10*1000);

  }

  refreshAllData(){
    // get all data except runner and markets
    this.store.dispatch(notesActions.getAllRunnersNotes())
    this.store.dispatch(tennisTournamentActions.getAllTennisTournament())
    this.store.dispatch(reportActions.getAllStrategies())
    this.store.dispatch(reportActions.getAllTrades())
    this.store.dispatch(basketsActions.getAllBaskets())
    this.store.dispatch(entryActions.getAllEntries())
    this.store.dispatch(studyActions.getAllStudies())
    this.store.dispatch(playersActions.getAllPlayers())
    this.store.dispatch(marketActions.getAllFilterBasket())

  }

}
