import {Component, OnInit, Output} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as marketActions from '../../../../store/markets/markets.actions';
import * as marketSelectors from '../../../../store/markets/markets.selectors';
import * as fromRoot from '../../../../store';
import {Observable, Subject} from 'rxjs';
import {MarketInfoBasic} from '../../../../model/market/basic/marketInfoBasic';
import {IsLoading} from '../../../../model/isLoading';



@Component({
  selector: 'app-dashboard',
  templateUrl: './markets-list.component.html',
  preserveWhitespaces: true
})
export class MarketsListComponent implements OnInit {

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  allMarkets$: Observable<MarketInfoBasic[]>
  isLoadingAllMarkets$: Observable<IsLoading>

  constructor(private router: Router,
              private readonly store: Store) {

    this.allMarkets$ = this.store.pipe(select(marketSelectors.getAllMarkets))
    this.isLoadingAllMarkets$ = this.store.pipe(select(marketSelectors.isLoadingAllMarkets))

  }

  ngOnInit(): void {



  }




}
