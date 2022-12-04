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
  $backtestList: Observable<BacktestInterface[]>
  $backtestTradesCount: Observable<number>
  $backtestTradesList: Observable<Trade[]>


  constructor(private modalService: NgbModal,
              private store: Store,) {}

  ngOnInit(): void {
    // get backtest state
    this.$backtestIsLoading = this.store.pipe(select(reportSelectors.getBacktestIsLoading))
    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))
    this.$backtestTradesCount = this.store.pipe(select(reportSelectors.getBacktestCurrentTradesCount))
    this.$backtestList = this.store.pipe(select(reportSelectors.getAllBacktestTrade))
    this.$backtestTradesList = this.store.pipe(select(reportSelectors.getBacktestTradeList))
  }

  openVerticalCenteredModal(content) {

    // pre open Modal
    this.modalService.open(content, {centered: true, size:'xl', backdrop: 'static', keyboard: false}).result.then((result) => {
      // modal is Open

      // emit result of backtest and confirm
    }).catch((res) => {
    });
  }

  backtestModeChange(event){
    this.store.dispatch(reportActions.backtestChangeMode());
  }
}
