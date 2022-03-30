import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import {ListForm} from "../../../../model/listForm";
import * as tennisTournamentSelectors from "../../../../store/tennis-tournament/tennisTournament.selectors";
import * as strategySelectors from "../../../../store/report/report.selectors";
import * as basketSelectors from "../../../../store/study/basket/basket.selectors";
import * as entrySelectors from "../../../../store/study/entry/entry.selectors";
import * as playersSelectors from "../../../../store/study/players/players.selectors";


@Component({
  selector: 'app-list-selection-form',
  templateUrl: './list-selection-form.component.html',
})
export class ListSelectionFormComponent implements OnInit {

  @Output() listSelectedEmitter = new EventEmitter
  @Input() selectedId: string
  @Input() type: 'tennisTournament' | 'strategy' | 'basket' | 'entry' | 'players'

  destroy$: Subject<boolean> = new Subject<boolean>();

  title: string
  list$: Observable<ListForm[]>

  selected = {
    name: '',
    id: ''
  }

  constructor(private readonly store: Store) {  }

  ngOnInit(): void {
    switch (this.type){
      case "tennisTournament":{
        this.title = 'Tennis Tournament selector'
        this.list$ = this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentsList))

        if(this.selectedId){
          this.selected.id = this.selectedId
          this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentNameById(this.selected.id)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( name => this.selected.name = name)
        }
        break
      }
      case "strategy":{
        this.title = 'Strategy selector'
        this.list$ = this.store.pipe(select(strategySelectors.getStrategyList))

        if(this.selectedId){
          this.selected.id = this.selectedId
          this.store.pipe(select(strategySelectors.getStrategyNameById(this.selected.id)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( name => this.selected.name = name)
        }
        break
      }
      case "basket":{
        this.title = 'Basket selector'
        this.list$ = this.store.pipe(select(basketSelectors.getBasketListForm))

        if(this.selectedId){
          this.selected.id = this.selectedId
          this.store.pipe(select(basketSelectors.getBasketNameById(this.selected.id)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( name => this.selected.name = name)
        }
        break
      }
      case "entry":{
        this.title = 'Entry selector'
        this.list$ = this.store.pipe(select(entrySelectors.getEntryListForm))

        if(this.selectedId){
          this.selected.id = this.selectedId
          this.store.pipe(select(entrySelectors.getEntryNameById(this.selected.id)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( name => this.selected.name = name)
        }
        break
      }
      case "players":{
        this.title = 'Players selector'
        this.list$ = this.store.pipe(select(playersSelectors.getPlayersListForm))

        if(this.selectedId){
          this.selected.id = this.selectedId
          this.store.pipe(select(playersSelectors.getPlayersNameById(this.selected.id)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( name => this.selected.name = name)
        }
        break
      }
    }
  }

  updateName(){
    switch (this.type){
      case "tennisTournament":{
        this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentNameById(this.selected.id)))
          .pipe(takeUntil(this.destroy$))
          .subscribe( name => this.selected.name = name)
        this.listSelectedEmitter.emit([this.selected])
        break
      }
      case "strategy":{
        this.store.pipe(select(strategySelectors.getStrategyNameById(this.selected.id)))
          .pipe(takeUntil(this.destroy$))
          .subscribe( name => this.selected.name = name)
        this.listSelectedEmitter.emit([this.selected])
        break
      }
      case "basket":{
        this.store.pipe(select(basketSelectors.getBasketNameById(this.selected.id)))
          .pipe(takeUntil(this.destroy$))
          .subscribe( name => this.selected.name = name)
        this.listSelectedEmitter.emit([this.selected])
        break
      }
      case "entry":{
        this.store.pipe(select(entrySelectors.getEntryNameById(this.selected.id)))
          .pipe(takeUntil(this.destroy$))
          .subscribe( name => this.selected.name = name)
        this.listSelectedEmitter.emit([this.selected])
        break
      }
      case "players":{
        this.store.pipe(select(playersSelectors.getPlayersNameById(this.selected.id)))
          .pipe(takeUntil(this.destroy$))
          .subscribe( name => this.selected.name = name)
        this.listSelectedEmitter.emit([this.selected])
        break
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
