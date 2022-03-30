import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Bets, Entry, EntryOptions} from "../../../../../model/study/entry/entry";
import {takeUntil} from "rxjs/operators";
import {Store} from "@ngrx/store";
import * as entryActions from "../../../../../store/study/entry/entry.actions";


@Component({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
})
export class EntryCreateComponent implements OnInit, OnDestroy {

  @Input() selectedEntry$: Observable<Entry>
  entryInput: Entry

  destroy$: Subject<boolean> = new Subject<boolean>();

  data= this.resetFormData()
  options = this.resetFormOptions()
  bets = this.resetFormBets()

  bug: boolean =  true


  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.selectedEntry$
      .pipe(takeUntil(this.destroy$))
      .subscribe(entry => {
        if(entry){
          // update with selected entry in punt
          this.entryInput =  JSON.parse(JSON.stringify(entry))
          this.data = {
            id: this.entryInput._id,
            name: this.entryInput.entry.name,
            description:  this.entryInput.entry.description,
            create: false,
          }
          this.options = this.entryInput.entry.options
          this.bets = this.entryInput.entry.bets
          this.bugFix()
        } else {
          // select is null, we have to create
          this.data = this.resetFormData()
          this.options = this.resetFormOptions()
          this.bets = this.resetFormBets()
          this.bugFix()
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  submit(){

    // generate entry to pass to the serve
    let entry: Entry = {
      created: 0,
      lastUpdate: 0,
      entry: {
        name: this.data.name,
        description: this.data.description,
        options: this.options,
        bets: this.bets
      }
    }

    // check for actions
    if(this.data.create){
      // create action
      entry.created = Date.now()
      entry.lastUpdate = Date.now()
      this.store.dispatch(entryActions.createEntry({ entry: entry}));
    } else {
      // update action
      entry.created = this.entryInput.created
      entry.lastUpdate = Date.now()
      this.store.dispatch(entryActions.updateEntry({ _id: this.entryInput._id, entry: entry}));
    }
    // reset form after actions
    this.data = this.resetFormData()
    this.options = this.resetFormOptions()
    this.bets = this.resetFormBets()
    this.bugFix()

  }

  /*
  * UPDATES BETS ARRAY
 */

  // entry
  addEntry(){
    this.bets.push(this.generateEntryType())
  }
  removeEntry(id: number){
    this.bets =  this.bets.filter( x => x.id !== id)
  }

  updateIsBackEntry(event, index: number){
    this.bets[index].entry.isBack = event[0]
    this.bets[index].lossExit.isBack = !event[0]
    this.bets[index].profitExit.isBack =!event[0]
  }

  updateHaveExit(event, index: number, isProfit: boolean){
    if(isProfit){
      this.bets[index].haveProfit = event[0]
      this.bets[index].profitExit = {
        isBack: !this.bets[index].entry.isBack,
        isUp: !this.bets[index].entry.isBack,
        odds:  1.01,
        stake:  0,
        bank:  0,
        liability:  0,
        timeLimit:  0,
        marginTicks:  0,
      }
    } else {
      this.bets[index].haveLoss = event[0]
      this.bets[index].lossExit = {
        isBack: !this.bets[index].entry.isBack,
        isUp: !this.bets[index].entry.isBack,
        odds:  1.01,
        stake:  0,
        bank:  0,
        liability:  0,
        timeLimit:  0,
        marginTicks:  0,
      }
    }
  }

  updateOdds(event, index: number, isEntry: boolean, isProfit: boolean){
    if(isEntry){
      if(event[0]) {
        //is back
        this.bets[index].entry.odds = event[1]
        this.bets[index].entry.stake = event[2]
        this.bets[index].entry.liability = 0
      } else {
        //is lay
        this.bets[index].entry.odds = event[1]
        this.bets[index].entry.bank = event[2]
        this.bets[index].entry.liability = event[3]
        this.bets[index].entry.stake = 0
      }
    } else if(isProfit){
      if(event[0]) {
        //is back
        this.bets[index].profitExit.odds = event[1]
        this.bets[index].profitExit.stake = event[2]
        this.bets[index].profitExit.liability = 0
      } else {
        //is lay
        this.bets[index].profitExit.odds = event[1]
        this.bets[index].profitExit.bank = event[2]
        this.bets[index].profitExit.liability = event[3]
        this.bets[index].profitExit.stake = 0
      }
    } else {
      if(event[0]) {
        //is back
        this.bets[index].lossExit.odds = event[1]
        this.bets[index].lossExit.stake = event[2]
        this.bets[index].lossExit.liability = 0
      } else {
        //is lay
        this.bets[index].lossExit.odds = event[1]
        this.bets[index].lossExit.bank = event[2]
        this.bets[index].lossExit.liability = event[3]
        this.bets[index].lossExit.stake = 0
      }
    }
  }

  updateIsUp(event, index: number, isEntry: boolean, isProfit: boolean){
    if(isEntry){
      this.bets[index].entry.isUp = event[0]
    } else if(isProfit){
      this.bets[index].profitExit.isUp = event[0]
    } else {
      this.bets[index].lossExit.isUp = event[0]
    }
  }

  updateIsFirst(event){
    this.options.isFirstOccurrence = event[0]
  }



  /*
  * CREATE AND REST DATA TO INITIAL VALUE
 */
  resetFormData(){
    return {
      id: '',
      name: '',
      description: '',
      create: true
    }
  }

  resetFormOptions(): EntryOptions {
    return {
      isFirstOccurrence: true,
      timeToEntry: 0,
    }
  }

  resetFormBets(): Bets[] {
    return [this.generateEntryType()]

  }

  generateEntryType(): Bets {
    return {
      id: Date.now(),
      entry: {
        isBack: true,
        isUp: true,
        odds: 1.10,
        stake: 0,
        bank:  0,
        liability:  0,
        timeLimit:  0,
        marginTicks:  0,
      },
      haveProfit: true,
      haveLoss: true,
      profitExit: {
        isBack: false,
        isUp: false,
        odds:  0,
        stake:  0,
        bank:  0,
        liability:  0,
        timeLimit:  0,
        marginTicks:  0,
      },
      lossExit: {
        isBack: false,
        isUp: false,
        odds:  0,
        stake:  0,
        bank:  0,
        liability:  0,
        timeLimit:  0,
        marginTicks:  0,
      }
    }
  }

  // temp to fix odds bug
  bugFix(){
    this.bug = false
    setTimeout(() =>
      {
        this.bug = true
      },
      100);
  }



}
