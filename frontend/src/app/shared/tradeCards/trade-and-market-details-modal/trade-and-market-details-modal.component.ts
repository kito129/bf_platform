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
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-and-market-details-modal',
  templateUrl: './trade-and-market-details-modal.component.html',
})
export class TradeAndMarketDetailsModalComponent implements OnInit,OnDestroy{

  @Input() trade: NewTrade

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

    // subscribe to API response
    this.marketService.getMarketIdByNameAndDate(this.trade.trade.info.marketInfo.marketName,this.trade.trade.info.date)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.marketId.indexOf('1.') !== -1) {
          this.marketId = response.marketId
        } else {
          this.notFound = true
        }
      })

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
          // centered: true
        }).result.then((result) => {
          this.store.dispatch(marketActions.resetMarketDetail())
          this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
          this.closeResult = `Dismissed`;
        });
      })


  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



}
