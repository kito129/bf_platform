import { Component, OnInit } from '@angular/core';
import {StrategyUploader} from '../../../../model/report/strategyUploader';
@Component({
  selector: 'app-strategy-uploader-main',
  templateUrl: './strategy-uploader-main.component.html',
})
export class StrategyUploaderMainComponent implements OnInit {

  strategyUploaderMatch: StrategyUploader[] = []

  defaultNavActiveId = 1

  constructor() { }

  ngOnInit(): void {
  }

  addNewMarket(){

    this.strategyUploaderMatch.push({
      info: {
        name: 'NewMarket' + (this.strategyUploaderMatch.length+1),
        id: Date.now(),
        lastUpdate: Date.now(),
      },
      trade: null,
    })
  }

  deleteMarket(index: number){
    this.strategyUploaderMatch.splice(index, 1);
  }

}
