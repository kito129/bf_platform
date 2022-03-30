import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TennisPoint} from '../../../../model/point/tennisPoint';

@Component({
  selector: 'app-tennis-point',
  templateUrl: './tennis-point.component.html',
})
export class TennisPointComponent implements OnInit {

  @Input()
  tennisPoint: TennisPoint
  @Output()
  tennisPointEmitter = new EventEmitter();
  @Input()
  showGame: boolean

  constructor() { }

  public game = ['0','15','30','40','AD']

  public value: string

  ngOnInit(): void {
    this.value = this.tennisPoint.currentGame.server
  }

  update(){
    if(this.value==='A'){
      this.tennisPoint.currentGame.server = 'A'
    } else if(this.value==='B'){
      this.tennisPoint.currentGame.server = 'B'
    } else {
      this.tennisPoint.currentGame.server = null
    }
    console.log(this.tennisPoint)
    this.tennisPointEmitter.emit([this.tennisPoint])
  }

}
