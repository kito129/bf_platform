import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {TennisTournament} from '../../model/tennisTournament/tennisTournament';
import {select, Store} from '@ngrx/store';
import * as tennisTournamentSelectors from '../../store/tennis-tournament/tennisTournament.selectors';
import {Observable, Subject} from 'rxjs';
import {TennisTournamentList} from '../../model/tennisTournament/tennisTournamentList';
import {takeUntil} from 'rxjs/operators';

@Pipe({
  name: 'tournament'
})
export class TournamentPipe implements PipeTransform, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  private tennisList: Observable<TennisTournament[]>

  constructor(private readonly store: Store) {
    this.tennisList = this.store.pipe(select(tennisTournamentSelectors.getAllTennisTournaments))
  }


  transform(tournamentId: string) {
    this.tennisList.pipe(takeUntil(this.destroy$)).subscribe( x => {
      if(x.length){
        const tour =  x.filter(y=> y._id === tournamentId)[0]
        return `
            <h5 class="text-primary">${tour.tournament.detail.name}</h5>
              `
      }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
