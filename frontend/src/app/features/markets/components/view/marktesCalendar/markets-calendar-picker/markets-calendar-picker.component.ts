import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-markets-calendar-picker',
  templateUrl: './markets-calendar-picker.component.html',
})
export class MarketsCalendarPickerComponent implements OnInit {

  ngOnInit() {
  }

  selectedDate: NgbDateStruct;
  date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.selectedDate = this.calendar.getToday();
  }
}
