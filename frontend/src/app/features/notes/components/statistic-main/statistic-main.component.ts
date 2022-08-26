import {Component, Input, OnInit} from '@angular/core';
import {NoteStats} from '../../../../model/dashboard/noteStats';
import {Utils} from '../../../../model/calculator/utils';

@Component({
  selector: 'app-statistic-main',
  templateUrl: './statistic-main.component.html',
})
export class StatisticMainComponent implements OnInit {

  @Input() stats: NoteStats
  @Input() month: {
    month: string,
    noteStats: NoteStats
  }[]

  labels = []
  length = []
  win = []
  loss = []
  retired = []
  nMretired = []
  fSretired = []

  check = 0

  avgLength = '0'
  avgWin = '0'
  avgLoss = '0'
  avgRetired = '0'
  avgNoMed = '0'

  util = new Utils()

  constructor() { }

  ngOnInit(): void {

    this.labels = this.month.map(x => x.month)
    this.length = this.month.map(x => x.noteStats.length)
    this.win = this.month.map(x => x.noteStats.medical.winner)
    this.loss = this.month.map(x => x.noteStats.medical.looser)
    this.retired = this.month.map(x => x.noteStats.medical.retired)
    this.nMretired = this.month.map(x => x.noteStats.stats.nmRetires)
    this.fSretired = this.month.map(x => x.noteStats.medical.fsRetired)

    this.check = this.win.reduce((a,b) => a+b) + this.loss.reduce((a,b) => a+b) +this.retired.reduce((a,b) => a+b)

    // check avg
    this.avgLength = this.util.avgOfArrayNumber(this.length).toFixed(0)
    this.avgWin = this.util.avgOfArrayNumber(this.win).toFixed(0)
    this.avgLoss = this.util.avgOfArrayNumber(this.loss).toFixed(0)
    this.avgRetired = this.util.avgOfArrayNumber(this.retired).toFixed(0)
    this.avgNoMed = this.util.avgOfArrayNumber(this.nMretired).toFixed(0)
  }

}
