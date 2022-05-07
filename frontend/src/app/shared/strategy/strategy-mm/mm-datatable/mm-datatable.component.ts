import {Component, Input, OnInit} from '@angular/core';
import {MmResult} from '../../../../model/calculator/mm';

@Component({
  selector: 'app-mm-datatable',
  templateUrl: './mm-datatable.component.html',
})
export class MmDatatableComponent implements OnInit {

  @Input() result: MmResult

  constructor() { }

  ngOnInit(): void {
  }

}
