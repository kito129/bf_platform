import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import * as reportActions from '../../../../store/report/report.actions';
import {select, Store} from '@ngrx/store';
import {BacktestInterface} from '../../../../model/backtest/backtestInterface';
import {Trade} from '../../../../model/report/trade/trade';
import * as reportSelectors from '../../../../store/report/report.selectors';
import {IsLoading} from '../../../../model/isLoading';

@Component({
  selector: 'app-backtest-modal',
  templateUrl: './backtest-modal.component.html',
  styles: ['/deep/ .modal {padding: 0 !important; } .modal .modal-dialog {width: 100%; !important; max-width: none !important;height: 100% ;!importantmargin: 0!important;} .modal .modal-content {height: 100% !important;border: 0 !important;border-radius: 0 !important;} .modal .modal-body {overflow-y: auto !important;}']
})
export class BacktestModalComponent implements OnInit {

  $backtestIsLoading: Observable<IsLoading>
  $backtestMode: Observable<boolean>
  $allBacktests: Observable<BacktestInterface[]>
  $backtestTradesToAddCount: Observable<number>
  $backtestTradesToAdd: Observable<Trade[]>
  $backtestTradesToRemove: Observable<Trade[]>
  $selectedBacktest: Observable<BacktestInterface>
  $backtestSelectedBacktestTrades: Observable<Trade[]>

  constructor(private modalService: NgbModal,
              private store: Store,) {}

  ngOnInit(): void {
    // get backtest state
    this.$backtestIsLoading = this.store.pipe(select(reportSelectors.getBacktestIsLoading))
    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))
    this.$backtestTradesToAddCount = this.store.pipe(select(reportSelectors.getBacktestCurrentTradesCount))
    this.$allBacktests = this.store.pipe(select(reportSelectors.getAllBacktest))
    this.$backtestTradesToAdd = this.store.pipe(select(reportSelectors.getBacktestCurrentTrades))
    this.$backtestTradesToRemove = this.store.pipe(select(reportSelectors.getBacktestTradesToRemove))
    this.$selectedBacktest = this.store.pipe(select(reportSelectors.getSelectedBacktest))
    this.$backtestSelectedBacktestTrades = this.store.pipe(select(reportSelectors.getSelectedBacktestTrade))
  }

  openVerticalCenteredModal(content) {

    // pre open Modal
    this.modalService.open(content, {centered: true, size:'xl', backdrop: 'static', keyboard: false}).result.then((result) => {
      // modal is Open

      // emit result of backtest and confirm
    }).catch((res) => {
    });
  }

  unsetBacktestSelected(){
    this.store.dispatch(reportActions.backtestUnSelected());
  }

  backtestModeChangeRightClick(event){
    event.preventDefault()
    this.store.dispatch(reportActions.backtestChangeMode());
  }

  changeBacktestMode(){
    this.store.dispatch(reportActions.backtestChangeMode());
  }
}
