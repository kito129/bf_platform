import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import {Strategy} from '../model/report/strategy/strategy';
import {Trade} from '../model/report/trade/trade';
import {SavedReport} from '../model/report/savedReport';
import {BacktestInterface} from "../model/backtest/backtestInterface";

const headers = {'Content-Type': 'application/json'};

const baseUrl = environment.apiUrl + '/report'

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  // CRUD TRADE
  getAllTrades(): Observable<any> {
    return this.http.get(`${baseUrl}/trade/all`);
  }

  createTrade(trade: Trade): Observable<any> {
    return this.http.put(`${baseUrl}/trade/create`,trade,{headers});
  }

  updateTrade(id,trade: Trade): Observable<any> {
    const body = JSON.stringify(trade)
    return this.http.post(`${baseUrl}/trade/${id}`,body, {headers});
  }

  deleteTrade(id): Observable<any> {
    return this.http.delete(`${baseUrl}/trade/${id}`, {headers});
  }

  deleteManyTrades(ids: string[]): Observable<any> {
    const body = JSON.stringify(ids)
    return this.http.post(`${baseUrl}/trades`, body, {headers});
  }


  // CRUD STRATEGY
  getAllStrategy(): Observable<any> {
    return this.http.get(`${baseUrl}/strategy/all`);
  }

  createStrategy(strategy: Strategy): Observable<any> {
    return this.http.put(`${baseUrl}/strategy/create`,strategy,{headers});
  }

  updateStrategy(id,strategy: Strategy): Observable<any> {
    const body = JSON.stringify(strategy)
    return this.http.post(`${baseUrl}/strategy/${id}`,body, {headers});
  }

  deleteStrategy(id): Observable<any> {
    return this.http.delete(`${baseUrl}/strategy/${id}`, {headers});
  }

  // CRUD SAVED REPORT
  getAllSavedReport(): Observable<any> {
    return this.http.get(`${baseUrl}/savedReport/all`);
  }

  createSavedReport(savedReport: SavedReport): Observable<any> {
    return this.http.put(`${baseUrl}/savedReport/create`,savedReport,{headers});
  }

  updateSavedReport(id, savedReport: SavedReport): Observable<any> {
    const body = JSON.stringify(savedReport)
    return this.http.post(`${baseUrl}/savedReport/${id}`,body, {headers});
  }

  deleteSavedReport(id): Observable<any> {
    return this.http.delete(`${baseUrl}/savedReport/${id}`, {headers});
  }

  // CRUD BACKTEST
  getAllBacktests(): Observable<any> {
    return this.http.get(`${baseUrl}/backtest/all`);
  }

  createBacktest(backtest: BacktestInterface, trades: Trade[]): Observable<any> {
    const body = {
      backtest,
      trades
    }
    return this.http.put(`${baseUrl}/backtest/create`,body,{headers});
  }

  updateBacktest(id, backtest: BacktestInterface, tradesToAdd: Trade[],  tradesToRemove: string[]): Observable<any> {
    const body = {
      backtest,
      tradesToAdd,
      tradesToRemove
    }
    return this.http.post(`${baseUrl}/backtest/update/${id}`,body, {headers});
  }

  deleteBacktest(id): Observable<any> {
    return this.http.delete(`${baseUrl}/backtest/delete/${id}`, {headers});
  }

  // CRUD BACKTEST TRADE
  getAllBacktestsTrades(): Observable<any> {
    return this.http.get(`${baseUrl}/backtest/trades/all`);
  }

  createBacktestTrades(trades: Trade[]): Observable<any> {
    return this.http.put(`${baseUrl}/backtest/trades/create`,trades,{headers});
  }

  deleteBacktestTrades(ids: string[]): Observable<any> {
    const body = JSON.stringify(ids)
    return this.http.put(`${baseUrl}/backtest/trades/delete`,body, {headers});
  }

}
