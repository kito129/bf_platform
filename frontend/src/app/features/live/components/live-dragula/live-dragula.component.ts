import {Component, OnDestroy, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';
import {LiveRow} from '../../../../model/live/liveRunner';
import {Observable, Subject} from 'rxjs';
import {LiveService} from '../../../../services/live.service';
import {AngularFireObject} from '@angular/fire/database';
import {takeUntil} from 'rxjs/operators';
import {Note} from "../../../../model/note/note";
import {select, Store} from "@ngrx/store";
import * as notesSelectors from "../../../../store/notes/notes.selectors";

@Component({
  selector: 'app-live-dragula',
  templateUrl: './live-dragula.component.html',
})
export class LiveDragulaComponent implements OnInit, OnDestroy {

  allNotes$: Observable<Note[]>

  runnerRowsFirstMonitor: LiveRow[] = []
  runnerRowsSecondMonitor: LiveRow[] = []
  runnerRowsThirdMonitor: LiveRow[] = []
  runnerRowsSecondaryMonitor: LiveRow[] = []
  runnerRowsThirdPcMonitor: LiveRow[] = []
  runnerRowsExtraPcMonitor: LiveRow[] = []

  firstMonitor = 6
  secondMonitor = 12
  thirdMonitor = 18
  secondaryMonitor = 24
  thirdPcMonitor = 30
  extraPcMonitor = 36



  itemRef: AngularFireObject<any>
  item$: Observable<LiveRow[]>

  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private dragulaService: DragulaService,
              private liveServices: LiveService,
              private readonly store: Store) {}

  updateRow(event, type: 'a' | 'b' | 'c' | 'd' | 'e' |'f'){
    if(type==='a'){
      this.liveServices.update(event[1], event[0])
    } else if(type==='b'){
      this.liveServices.update(event[1], event[0]+6)
    } else if(type==='c'){
      this.liveServices.update(event[1], event[0]+12)
    } else if(type==='d'){
      this.liveServices.update(event[1], event[0]+18)
    } else if(type==='e'){
      this.liveServices.update(event[1], event[0]+24)
    } else if(type==='f'){
      this.liveServices.update(event[1], event[0]+30)
    }
  }

  ngOnInit() {

    this.allNotes$ = this.store.pipe(select(notesSelectors.getAllNotes))

    this.itemRef = this.liveServices.itemRef
    this.item$ = this.liveServices.item$

    this.item$
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => {
        if (data){
          // reset
          this.runnerRowsFirstMonitor = []
          this.runnerRowsSecondMonitor = []
          this.runnerRowsThirdMonitor = []
          this.runnerRowsSecondaryMonitor = []
          this.runnerRowsThirdPcMonitor = []
          this.runnerRowsExtraPcMonitor = []

          // set data from services
          for (let i=0; i<this.firstMonitor; i++){
            this.runnerRowsFirstMonitor.push(data[i])
          }
          for (let i=6; i<this.secondMonitor; i++){
            this.runnerRowsSecondMonitor.push(data[i])
          }
          for (let i=12; i<this.thirdMonitor; i++){
            this.runnerRowsThirdMonitor.push(data[i])
          }
          for (let i=18; i<this.secondaryMonitor; i++){
            this.runnerRowsSecondaryMonitor.push(data[i])
          }
          for (let i=24; i<this.thirdPcMonitor; i++){
            this.runnerRowsThirdPcMonitor.push(data[i])
          }
          for (let i=30; i<this.extraPcMonitor; i++){
            this.runnerRowsExtraPcMonitor.push(data[i])
          }

        }
      })

    this.dragulaService.createGroup('RUNNERS', {});

    this.dragulaService.drop('RUNNERS')
      .pipe(takeUntil(this.destroy$))
      .subscribe(args => {
        const update = this.runnerRowsFirstMonitor
          .concat(this.runnerRowsSecondMonitor)
          .concat(this.runnerRowsThirdMonitor)
          .concat(this.runnerRowsSecondaryMonitor)
          .concat(this.runnerRowsThirdPcMonitor)
          .concat(this.runnerRowsExtraPcMonitor)
        this.liveServices.set(update)
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
    this.dragulaService.destroy('RUNNERS')
  }

  counter(rows: LiveRow[]){
    return rows.reduce((acc, val) =>{
      return val.valid ? acc+=1 : acc},0)
  }
}
