import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FootballPoint} from "../../../../model/point/footballPoint";

@Component({
  selector: 'app-football-point',
  templateUrl: './football-point.component.html',
})
export class FootballPointComponent implements OnInit {

  @Input()
  footballPoint: FootballPoint
  @Output()
  footballPointEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.footballPointEmitter.emit([this.footballPoint])
  }

}
