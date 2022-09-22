import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odds-implicit',
  templateUrl: './oddsImplicit.component.html',
})
export class OddsImplicitComponent implements OnInit {

  @Input() odds: number

  constructor() { }

  ngOnInit(): void {
  }

}
