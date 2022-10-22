import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-odd-form',
  templateUrl: './odd-form.component.html',})
export class OddFormComponent implements OnInit {

  @Input() odds: number
  @Input() title: string
  @Output() oddsPointEmitter = new EventEmitter();

  oddsChild = 0

  constructor() { }

  ngOnInit(): void {
    if(this.odds){
      this.oddsChild = this.odds
    } else {
      this.oddsChild = 1.01
    }
  }

  update(){
    this.oddsPointEmitter.emit([this.oddsChild])
  }

}
