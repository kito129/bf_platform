import {Component, Input, OnInit} from '@angular/core';
import {MontecarloService} from "../../../../services/montecarlo.service";
import {MontecarloPipe} from "../../../../core/pipe/montecarlo.pipe";

@Component({
  selector: 'app-montecarlo-result',
  templateUrl: './montecarlo-result.component.html',
})
export class MontecarloResultComponent implements OnInit {

  @Input() win: boolean[][]

  winner: number[] = []

  constructor(private montecarloService :MontecarloService) { }

  ngOnInit(): void {

    const filterPipe = new MontecarloPipe();

    this.win.forEach( x => {
      this.winner.push(filterPipe.transform(x))
    })

  }

}
