import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bets-formatter',
  templateUrl: './bets-formatter.component.html',
})
export class BetsFormatterComponent implements OnInit {

  @Input() type: string
  @Input() stake: number
  @Input() bank: number
  @Input() odds: number
  @Input() toWin: number
  @Input() liability: number

  isBack = false
  isLay = false

  constructor() { }

  ngOnInit(): void {
    if(this.type.indexOf('back')!==-1){
      this.isBack = true

    } else if (this.type.indexOf('lay')!==-1){
      this.isLay = true
    }
  }
}
