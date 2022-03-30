import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDate} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-basket-filter-by-date',
  templateUrl: './basket-filter-by-date.component.html',
})
export class BasketFilterByDateComponent implements OnInit {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  fromDateUnix: number
  toDateUnix: number

  constructor(calendar: NgbCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.fromDateUnix = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day).getTime()
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.toDateUnix = new Date(this.toDate.year, this.toDate.month, this.toDate.day).getTime()
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.fromDateUnix = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day).getTime()
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit(): void {
  }

}
