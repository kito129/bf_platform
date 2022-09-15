import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from "../../../../model/report/new/newTrade";

@Component({
  selector: 'app-odds-movement',
  templateUrl: './odds-movement.component.html',
})
export class OddsMovementComponent implements OnInit {

  @Input() trade: NewTrade

  constructor() { }

  ngOnInit(): void {
  }

}
