import {Component, Input, OnInit} from '@angular/core';
import {Bets} from "../../../../../model/study/entry/entry";

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
})
export class EntryDetailComponent implements OnInit {

  @Input() bets: Bets[]

  constructor() { }

  ngOnInit(): void {
  }

}
