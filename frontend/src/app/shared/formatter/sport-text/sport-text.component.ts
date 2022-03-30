import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sport-text',
  templateUrl: './sport-text.component.html',
})
export class SportTextComponent implements OnInit {

  @Input()
  sport: string

  constructor() { }

  ngOnInit(): void {
  }

}
