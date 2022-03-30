import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbDateStruct, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import {TennisTournament} from "../../../../../../model/tennisTournament/tennisTournament";
import {Strategy} from "../../../../../../model/report/strategy";

@Component({
  selector: 'app-strategy-updates-modal',
  templateUrl: './strategy-updates-modal.component.html',
})
export class StrategyUpdatesModalComponent implements OnInit {

  // @ts-ignore
  @Output()
  strategyUpdateEmitter = new EventEmitter();
  @Input()
  strategyInput$: Observable<Strategy>

  public color = ['primary', 'secondary', 'danger', 'warning']
  public sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING']
  public strategyOutput: Strategy;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {

    this.strategyOutput = JSON.parse(JSON.stringify(this.strategyInput$))

    this.modalService.open(content, {centered: true}).result.then((result) => {

      this.strategyUpdateEmitter.emit([this.strategyOutput, result]);
    }).catch((res) => {});
  }

}
