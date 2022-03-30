import {Component, Input, OnInit} from '@angular/core';
import {CreateBasketOptionClass} from "../../../../../model/study/basket/createBasketOption";
import {SelectionBspFilter} from "../../../../../model/study/basket/filter";
import {Observable, Subject} from "rxjs";
import {Basket, BasketForm} from "../../../../../model/study/basket/basket";
import {takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";
import * as basketsActions from "../../../../../store/study/basket/basket.actions";


@Component({
  selector: 'app-basket-create',
  templateUrl: './basket-create.component.html',})
export class BasketCreateComponent implements OnInit {

  @Input() selectedBasket$: Observable<Basket>

  basketInput: Basket
  currentPlayersFilter: string = null

  destroy$: Subject<boolean> = new Subject<boolean>();

  data: BasketForm = {
    id: '',
    name: '',
    description: '',
    sport: null,
    create: true,
    options:{
      tennis:{
        notDoubles: true,
        delay3SecOnly: true,
        oddsLimit: 50
      }
    },
    playersFilter: [],
    relativeBasketId: '',
    size: 0
  }

  createStudyOptions: CreateBasketOptionClass = new CreateBasketOptionClass()

  // filter type
  bspFilter= {
    min: 1.01,
    max: 1.01,
    valid: true
  }
  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.selectedBasket$
      .pipe(takeUntil(this.destroy$))
      .subscribe(basket => {
        if(basket){
          this.basketInput =  JSON.parse(JSON.stringify(basket))
          this.data = {
            id: this.basketInput._id,
            name: this.basketInput.basket.name,
            description:  this.basketInput.basket.description,
            sport:  this.basketInput.basket.sport,
            create: false,
            options: this.basketInput.basket.options,
            relativeBasketId: this.basketInput.basket.relativeMarkets,
            size: this.basketInput.basket.size,
            playersFilter: this.basketInput.basket.playersFilter,
          }
          this.createStudyOptions.createStudy.activeFilter = this.basketInput.basket.activeFilter
          this.createStudyOptions.createStudy.selectedFilter = null
        } else {
          this.resetModel()
        }
      })

  }

  setCurrentPlayerFilter(event){
    this.currentPlayersFilter = event[0].id
  }

  addFilter() {
    switch (this.createStudyOptions.createStudy.selectedFilter) {
      case 0: {
        // BSP filter
        this.createStudyOptions.createStudy.activeFilter.push( new SelectionBspFilter(this.bspFilter.min,this.bspFilter.max))

        // reset value after push
        this.createStudyOptions.createStudy.selectedFilter = null
        this.bspFilter = {
          min: 1.01,
          max: 1.01,
          valid: true
        }
        break
      }
      case 1: {
        // PLAYERS  filter
        if(this.data.playersFilter.filter(x => x === this.currentPlayersFilter).length===0){
          this.data.playersFilter.push(this.currentPlayersFilter)
        }
        break
      }
      case 2: {
        break
      }
      case 3: {
        break
      }
    }
  }

  submit(){

    // create correct Object
    // empty relative due to space in response
    let basket: Basket = {
      created: Date.now(),
      lastUpdate:  Date.now(),
      basket: {
        name: this.data.name,
        description: this.data.description,
        sport: this.data.sport,
        activeFilter: this.createStudyOptions.createStudy.activeFilter,
        relativeMarkets: this.data.relativeBasketId,
        options: this.data.options,
        size: this.data.size,
        playersFilter: this.data.playersFilter
      }
    }


    if(this.data.create){
      //im create
      this.store.dispatch(basketsActions.createBasket({basket: basket}))
      this.resetModel()
    } else {
      // im updating
      basket._id = this.data.id
      basket.created = this.basketInput.created
      basket.lastUpdate = Date.now()

      this.store.dispatch(basketsActions.updateBasket({_id: basket._id, basket: basket}))
      this.resetModel()
    }
  }

  removeActiveFilter(event){
    this.createStudyOptions.createStudy.activeFilter = this.createStudyOptions.createStudy.activeFilter.filter(x => x.id !== event[0])
  }

  removePlayersFilter(event){
   this.data.playersFilter =  this.data.playersFilter.filter( x => x !== event[0])
  }

  setBspFilter(event){
    if(event[0]){
      this.bspFilter = {
        min: event[0].min,
        max: event[0].max,
        valid: true
      }
    } else {
      this.bspFilter.valid = false
    }
  }

  resetModel(){
    this.basketInput = null
    this.data = {
      id: null,
      name: '',
      description: '',
      sport: null,
      create: true,
      options: {
        tennis:{
          notDoubles: true,
          delay3SecOnly: true,
          oddsLimit: 50
        }
      },
      playersFilter: [],
      relativeBasketId: '',
      size: 0
    }
    this.currentPlayersFilter = null
    this.createStudyOptions = new CreateBasketOptionClass()
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
