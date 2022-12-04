import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Players, PlayersForm} from "../../../../../model/study/players/players";
import * as playersActions from "../../../../../store/study/players/players.actions";
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-players-create',
  templateUrl: './players-create.component.html',
})
export class PlayersCreateComponent implements OnInit, OnDestroy {

  @Input() selectedPlayers$: Observable<Players>

  playersInput: Players

  bug: boolean = true

  destroy$: Subject<boolean> = new Subject<boolean>();

  data: PlayersForm = {
    _id: null,
    name: null,
    description: null,
    create: true,
    playersList: [],
    valid: {
      from: new Date().getTime(),
      to: new Date().getTime(),
    }
  }

  currentSelected =  {
    name: '',
    id: -1
  }

  constructor(readonly store: Store) { }

  ngOnInit(): void {

    this.selectedPlayers$
      .pipe(takeUntil(this.destroy$))
      .subscribe(players => {
        if (players) {
          this.playersInput =  JSON.parse(JSON.stringify(players))
          this.data.name = this.playersInput.players.name
          this.data.description = this.playersInput.players.description
          this.data.playersList = this.playersInput.players.playersList
          this.data.valid = this.playersInput.players.valid
          this.data._id = this.playersInput._id
          this.data.create = false
        } else {
          this.data.create = true
          this.resetModel()
        }
        this.bugFix()
      })
  }

  setCurrentRunner(event){
    this.currentSelected.id = event[0].id
    this.currentSelected.name = event[0].name
  }

  addRunner(){
    this.data.playersList.push(this.currentSelected.id)
  }

  removeRunner(id: number){
    this.data.playersList = this.data.playersList.filter( x => x !== id)
  }

  checkAlreadyPresent(id: number){
    return this.data.playersList.filter( x => x === id).length===0
  }

  setFrom(event){
    this.data.valid.from = event[0]
  }

  setTo(event){
    this.data.valid.to = event[0]
  }



  submit(){

    // create correct Object
    let players: Players = {
      created: Date.now(),
      lastUpdate:  Date.now(),
      players: {
        name: this.data.name,
        description: this.data.description,
        playersList: this.data.playersList,
        valid: this.data.valid
      }
    }
    if(this.data.create){
      //im create
      this.store.dispatch(playersActions.createPlayers({players: players}))
      this.resetModel()
    } else {
      // im updating
      players._id = this.data._id
      players.created = this.playersInput.created
      players.lastUpdate = Date.now()

      this.store.dispatch(playersActions.updatePlayers({_id: players._id, players: players}))
      this.resetModel()
    }
  }

  resetModel(){
    this.playersInput = null
    this.data = {
      _id: null,
      name: null,
      description: null,
      create: true,
      playersList: [],
      valid: {
        from: new Date().getTime(),
        to: new Date().getTime(),
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
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
