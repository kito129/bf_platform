import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bsp-odd',
  templateUrl: './bsp.component.html',
})
export class BspComponent {

  @Input() bspOdd: number
  @Input() text: string

  constructor() { }

}
