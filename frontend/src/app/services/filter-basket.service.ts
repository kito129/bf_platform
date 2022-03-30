import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {FilterBasket} from '../model/market/filter/filterBasket';

const baseUrl = environment.apiUrl + '/markets/filterBasket'
const headers = {'Content-Type': 'application/json'};

@Injectable({
  providedIn: 'root'
})
export class FilterBasketService {

  constructor(private http: HttpClient) { }

  // CRUD FILTER BASKET
  getAllFilterBasket(): Observable<any> {
    return this.http.get(`${baseUrl}/getAll`);
  }

  createFilterBasket(filterBasket: FilterBasket): Observable<any> {
    return this.http.put(`${baseUrl}/create`,filterBasket,{headers});
  }

  updateFilterBasket(id, filterBasket: FilterBasket): Observable<any> {
    const body = JSON.stringify(filterBasket)
    return this.http.post(`${baseUrl}/update/${id}`,body, {headers});
  }

  deleteFilterBasket(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`, {headers});
  }

}
