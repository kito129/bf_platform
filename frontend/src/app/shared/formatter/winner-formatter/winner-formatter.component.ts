import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-winner-formatter',
  templateUrl: './winner-formatter.component.html',
})
export class WinnerFormatterComponent implements OnInit {

  @Input() winner: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
