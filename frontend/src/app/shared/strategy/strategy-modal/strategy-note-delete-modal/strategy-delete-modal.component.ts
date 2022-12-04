import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TennisTournament} from "../../../../model/tennisTournament/tennisTournament";
import {Strategy} from "../../../../model/report/strategy/strategy";

@Component({
  selector: 'app-strategy-delete-modal',
  templateUrl: './strategy-delete-modal.component.html',
})
export class StrategyDeleteModalComponent implements OnInit {

  @Output()
  strategyDeleteEmitter = new EventEmitter();
  @Input()
  strategy: Strategy

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      console.log(this.strategy._id)
      this.strategyDeleteEmitter.emit([this.strategy._id,result]);
    }).catch((res) => {});
  }

}
