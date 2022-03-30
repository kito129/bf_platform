import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-options-selectors',
  templateUrl: './options-selectors.component.html',
})
export class OptionsSelectorsComponent implements OnInit {

  @Input() title: string
  @Input() option: boolean
  @Input() options: string[]
  @Output() isOptionEmitter = new EventEmitter();


  constructor() { }

  ngOnInit(): void { }

  update(){
    this.isOptionEmitter.emit([!this.option])
  }


}
