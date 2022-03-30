import {Component, Input, OnInit} from '@angular/core';
import {Study} from "../../../../../model/study/study/study";
import {Observable, Subject} from "rxjs";
import {select, Store} from "@ngrx/store";
import * as studyActions from "../../../../../store/study/study/study.actions";
import {takeUntil} from "rxjs/operators";
import {Bets} from "../../../../../model/study/entry/entry";
import * as entrySelectors from "../../../../../store/study/entry/entry.selectors";
import * as basketSelectors from "../../../../../store/study/basket/basket.selectors";
import {PlayersEffects} from "../../../../../store/study/players/players.effects";
@Component({
  selector: 'app-study-create',
  templateUrl: './study-create.component.html',
})
export class StudyCreateComponent implements OnInit {

  @Input() selectedStudy$: Observable<Study>

  selectedEntryBets$: Observable<Bets[]>

  studyInput: Study

  noRecalculate: boolean = false

  validBug =  true

  destroy$: Subject<boolean> = new Subject<boolean>();

  data= this.resetFormData()
  options = this.resetFormOptions()


  constructor(private readonly store: Store) { }

  returnBets(id: string){
    return  this.store.pipe(select(entrySelectors.getEntryBetsById(id)))
  }

  returnBasketFilter(id: string){
    return  this.store.pipe(select(basketSelectors.getBasketFilterById(id)))
  }

  returnBasketSize(id: string){
    return  this.store.pipe(select(basketSelectors.getBasketSizeById(id)))
  }

  ngOnInit(): void {

    this.selectedStudy$
      .pipe(takeUntil(this.destroy$))
      .subscribe(study => {
        if (study) {
          this.studyInput = JSON.parse(JSON.stringify(study))
          this.data = {
            id: this.studyInput._id,
            name: this.studyInput.study.name,
            description:  this.studyInput.study.description,
            strategyId: this.studyInput.study.strategyId,

            create: false,
          }
          this.options.element.entry = study.study.element.entry
          this.options.element.baskets = study.study.element.baskets
          this.options.element.trades = study.study.element.trades

        } else {
          this.data = this.resetFormData()
          this.options = this.resetFormOptions()
        }
        this.bugFix()
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  submit(){

    let study: Study = {
      created: 0,
      lastUpdate: 0,
      study: {
        name: this.data.name,
        description: this.data.description,
        strategyId: this.data.strategyId,
        element: {
          baskets: this.options.element.baskets,
          entry: this.options.element.entry,
          trades: this.options.element.trades,
        },
        options:{
          stake: 0,
          basketInAnd: true,
          entryInAnd: true,
        }
      }
    }

    if(this.data.create){
      study.created = Date.now()
      study.lastUpdate = Date.now()
      this.store.dispatch(studyActions.createStudy({ study: study}));
    } else {
      study.created = this.studyInput.created
      study.lastUpdate = Date.now()
      this.store.dispatch(studyActions.updateStudy({ _id: this.studyInput._id, study: study}));
    }
    // reset form
    this.data = this.resetFormData()
    this.options = this.resetFormOptions()
    this.bugFix()

  }

  setEntry(event){
    this.options.element.entry = [event[0].id]
  }


  setBasket(event){
    this.options.element.baskets = [event[0].id]
  }

  setStrategy(event){
    this.data.strategyId = [event[0].id]
  }

  resetFormData(){
    return {
      id: '',
      name: '',
      description: '',
      strategyId: null,
      create: true
    }
  }

  resetFormOptions(){
    return {
      element: {
        baskets: [],
        entry: [],
        trades: null,
        playersFilter: null
      },
      options:{
        stake: 0,
        basketInAnd: true,
        entryInAnd: true,
      }
    }
  }

  // temp to fix odds bug
  bugFix(){
    this.validBug = false
    setTimeout(() =>
      {
        this.validBug = true;
      },
      100);
  }

}
