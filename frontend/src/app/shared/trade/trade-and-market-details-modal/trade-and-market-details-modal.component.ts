import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IsLoading} from '../../../model/isLoading';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {takeUntil} from 'rxjs/operators';
import {MarketService} from '../../../services/market.service';
import * as marketActions from '../../../store/markets/markets.actions';
import {select, Store} from '@ngrx/store';
import * as marketSelectors from '../../../store/markets/markets.selectors';
import {MarketBasic} from '../../../model/market/basic/marketBasic';
import {Trade} from '../../../model/report/trade/trade';
import * as reportActions from "../../../store/report/report.actions";

@Component({
  selector: 'app-trade-and-market-details-modal',
  templateUrl: './trade-and-market-details-modal.component.html',
  styles:  [`
    ::ng-deep .gr-modal-full .modal-dialog .modal-xl  {
      width:100% !important;
      height:100vh !important;
      max-width: 100% !important;
    }
  `]
})
export class TradeAndMarketDetailsModalComponent implements OnInit,OnDestroy{

  @Input() trade: Trade
  @Input() isBacktest: boolean

  isLoadingMarketDetails$: Observable<IsLoading>
  marketDetails$: Observable<MarketBasic>
  closeResult = ''
  notFound = false

  marketId =''

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: NgbModal,
              private marketService: MarketService,
              private readonly store: Store) { }

  ngOnInit(): void {
    // selectors
    this.isLoadingMarketDetails$ = this.store.pipe(select(marketSelectors.isLoadingSelectedMarket))
    this.marketDetails$ = this.store.pipe(select(marketSelectors.getSelectedMarket))

    /*
    this.marketService.getMarketIdByNameAndDate(this.trade.trade.info.marketInfo.marketName,this.trade.trade.info.date)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.marketId.indexOf('1.') !== -1) {
          this.marketId = response.marketId
        } else {
          this.notFound = true
        }
      })
     */

  }

  openModal(content) {

    // subscribe to API response
    this.marketService.getMarketIdByNameAndDate(this.trade.trade.info.marketInfo.marketName,this.trade.trade.info.date)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.marketId.indexOf('1.') !== -1) {
          this.marketId = response.marketId
        } else {
          this.notFound = true
        }

        // open modal
        // call the actions getMarketDetail
        if(this.marketId.indexOf('1.')!==-1){
          this.store.dispatch(marketActions.getMarketDetail({ marketId: this.marketId}))
        } else {
          this.store.dispatch(marketActions.resetMarketDetail())
        }

        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'xl',
          windowClass: 'gr-modal-full'
          // centered: true
        }).result.then((result) => {
          this.store.dispatch(marketActions.resetMarketDetail())
          this.closeResult = `Closed with: ${result}`;
          this.destroy$.next(true);
          this.destroy$.complete();
        }, (reason) => {
          this.closeResult = `Dismissed`;
          this.destroy$.next(true);
          this.destroy$.complete();
        });
      })
  }

  tradeUpdate(event){
    console.log(event)
    if(event[1] === 'update')
    this.store.dispatch(reportActions.updateTrade({ trade:event[0]}));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



}
