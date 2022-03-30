import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable, Subject} from "rxjs";
import * as runnersSelectors from "../../../../store/runners/runners.selectors";
import {takeUntil} from "rxjs/operators";
import {RunnersList} from "../../../../model/runner/runnersList";
@Component({
  selector: 'app-runners-selection-form',
  templateUrl: './runners-selection-form.component.html',
})
export class RunnersSelectionFormComponent implements OnInit {

  @Input() title: string
  @Output() runnerSelectedEmitter = new EventEmitter()
  @Input() runnerId: number
  @Input() runnerId$: Observable<number>
  @Input() isLive: boolean

  destroy$: Subject<boolean> = new Subject<boolean>();

  runnersList$: Observable<RunnersList[]>

  selectedRunner = {
    name: '',
    id: -1
  }

  constructor(private readonly store: Store) {  }

  ngOnInit(): void {
    this.runnersList$ = this.store.pipe(select(runnersSelectors.getRunnersListForm))

    if(this.runnerId){
      this.selectedRunner.id = this.runnerId
      this.store.pipe(select(runnersSelectors.getRunnerNameById(this.selectedRunner.id)))
        .pipe(takeUntil(this.destroy$))
        .subscribe( name => {
          if(name){
            this.selectedRunner.name = name.name
          }
        })
    }

    if(this.runnerId$){
      this.runnerId$
        .pipe(takeUntil(this.destroy$))
        .subscribe( data => {
          if(data){
            this.selectedRunner.id = data
            this.store.pipe(select(runnersSelectors.getRunnerNameById(this.selectedRunner.id)))
              .pipe(takeUntil(this.destroy$))
              .subscribe( name => {
                if(name){
                  this.selectedRunner.name = name.name
                }
              })
          }
        })
    }

 }

  updateRunnerName(){
    this.store.pipe(select(runnersSelectors.getRunnerNameById(this.selectedRunner.id)))
      .pipe(takeUntil(this.destroy$))
      .subscribe( name => this.selectedRunner.name = name.name)
    this.runnerSelectedEmitter.emit([this.selectedRunner])
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
