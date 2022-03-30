import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-name-text',
  templateUrl: './event-name-text.component.html',
})
export class EventNameTextComponent implements OnInit {

  @Input() eventName: string

  constructor() { }

  ngOnInit(): void {
  }

}
