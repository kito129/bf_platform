import {Component, Input, OnInit} from '@angular/core';
import {GridData} from '../../../../model/market/advanced/gridData';

@Component({
  selector: 'app-advanced-grid',
  templateUrl: './advanced-grid.component.html',
})
export class AdvancedGridComponent implements OnInit {

  @Input() inputGrid: GridData

  constructor() { }

  ngOnInit(): void {
  }

}
