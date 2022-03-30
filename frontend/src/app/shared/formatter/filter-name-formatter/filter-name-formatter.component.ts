import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-name-formatter',
  templateUrl: './filter-name-formatter.component.html',
})
export class FilterNameFormatterComponent implements OnInit {

  @Input() id: number
  @Input() name: string

  constructor() { }

  ngOnInit(): void {
  }

}
