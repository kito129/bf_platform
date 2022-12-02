import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../../model/note/note';
import {MarketRunnersBasic} from '../../../model/market/basic/marketRunnersBasic';
import {TennisPoint} from "../../../model/point/tennisPoint";

@Component({
  selector: 'app-market-detail-point',
  templateUrl: './market-detail-point.component.html',
})
export class MarketDetailPointComponent implements OnInit {

  @Input()
  notesList: Note[]

  @Input()
  marketSelection: MarketRunnersBasic

  public point: TennisPoint

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
