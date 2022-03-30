import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateStruct} from '../../../model/date/dateStruct';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
})
export class DateFormComponent implements OnInit {

  @Input()
  time: number
  @Output()
  dateEmitter = new EventEmitter
  @Input()
  showTime: boolean
  @Input()
  showDate: boolean

  public dateStruct: DateStruct = {
    date: {
      month: 0,
      day: 0,
      year: 0,
    },
    time: {
      hour: 0,
      minute: 0,
      seconds: 0,
    }
  }

  constructor() { }

  ngOnInit(): void {

    if(this.time !== null){
      this.dateStruct.date.month = new Date(this.time).getMonth()+1
      this.dateStruct.date.day = new Date(this.time).getDate()
      this.dateStruct.date.year = new Date(this.time).getFullYear()
      this.dateStruct.time.hour = new Date(this.time).getHours()
      this.dateStruct.time.minute = new Date(this.time).getMinutes()
      this.dateStruct.time.seconds = new Date(this.time).getSeconds()
    } else {
      this.dateStruct.date.month = new Date().getMonth()+1
      this.dateStruct.date.day = new Date().getDate()
      this.dateStruct.date.year = new Date().getFullYear()
      this.dateStruct.time.hour = new Date().getHours()
      this.dateStruct.time.minute = new Date().getMinutes()
      this.dateStruct.time.seconds = new Date().getSeconds()
      this.onUpdate()
    }
  }

  onUpdate(){
    const timeOutput = new Date(this.dateStruct.date.year,this.dateStruct.date.month-1,this.dateStruct.date.day,
      this.dateStruct.time.hour,this.dateStruct.time.minute,this.dateStruct.time.seconds).getTime()
    this.emitDate(timeOutput)
  }

  emitDate(time: number){
    this.dateEmitter.emit([time])
  }

}
