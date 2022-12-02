import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchTabServiceService {

  constructor() { }

  searchMarketNameGoogle(toSearch: string, suffix?: string){
    const URL = 'https://www.google.com/search?q=' + toSearch + ' '  + suffix
    const viewportWidth = document.documentElement.clientWidth
    const viewportHeight = document.documentElement.clientHeight
    window.moveTo(0,0);
    window.open(URL, toSearch, 'height= 950, width=850, left='+(viewportWidth-300)+', top=0')
  }
}
