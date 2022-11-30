import {Component, Input, OnInit} from '@angular/core';
import {RunnerInfo} from '../../../../../model/runner/runner'

@Component({
  selector: 'app-runner-detail-info',
  templateUrl: './runner-detail-info.component.html',
})
export class RunnerDetailInfoComponent implements OnInit {

  @Input()
  runnerInfo: RunnerInfo

  constructor() { }

  ngOnInit(): void {
  }

  searchMarketNameGoogle(toSearch: string){
    const URL = 'https://www.google.com/search?q=' + toSearch + ' flashscore'
    const viewportWidth = document.documentElement.clientWidth
    const viewportHeight = document.documentElement.clientHeight
    window.moveTo(0,0);
    window.open(URL, toSearch, 'height= 950, width=850, left='+(viewportWidth-300)+', top=0')
  }

}
