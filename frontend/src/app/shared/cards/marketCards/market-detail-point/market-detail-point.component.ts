import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Note} from '../../../../model/note/note';
import {Point} from '../../../../model/market/point';
import {MarketInfoBasic} from '../../../../model/market/basic/marketInfoBasic';
import {MarketRunnersBasic} from '../../../../model/market/basic/marketRunnersBasic';

@Component({
  selector: 'app-market-detail-point',
  templateUrl: './market-detail-point.component.html',
})
export class MarketDetailPointComponent implements OnInit {

  @Input()
  notesList: Note[]

  @Input()
  marketSelection: MarketRunnersBasic

  public point: Point

  constructor() { }

  ngOnInit(): void {


   this.checkPoint()
  }

  private checkPoint() {

    console.log(this.notesList.map(y => y.note.selection.runnerB.id))

    this.marketSelection.marketRunners.map(x => {
      console.log(x.id)
      if (this.notesList.find(y => +y.note.selection.runnerA.id === +x.id ) || this.notesList.find(y => +y.note.selection.runnerB.id === +x.id )) {

        console.log('found')

      }
    })
  }
}
