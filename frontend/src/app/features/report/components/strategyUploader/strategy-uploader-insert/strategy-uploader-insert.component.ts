import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StrategyUploader} from '../../../../../model/report/strategyUploader';

@Component({
  selector: 'app-strategy-uploader-insert',
  templateUrl: './strategy-uploader-insert.component.html',
})
export class StrategyUploaderInsertComponent implements OnInit {

  @Input() market: StrategyUploader
  @Output() deleteMarketEmitter = new EventEmitter


  constructor() { }
  ngOnInit() {

  }

  deleteMarket(){
    this.deleteMarketEmitter.emit('delete')
  }

}
