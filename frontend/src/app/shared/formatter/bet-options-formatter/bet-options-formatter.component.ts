import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bet-options-formatter',
  templateUrl: './bet-options-formatter.component.html',
})
export class BetOptionsFormatterComponent implements OnInit {

  @Input() betOptions: string

  constructor() { }

  ngOnInit(): void {
  }

}
