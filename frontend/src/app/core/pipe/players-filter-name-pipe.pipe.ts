import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as playersSelectors from "../../store/study/players/players.selectors";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Pipe({
  name: 'playersFilterNamePipe'
})
export class PlayersFilterPipe implements PipeTransform {

  destroy$: Subject<boolean> = new Subject<boolean>();

  transform(value: string, store: Store): string {

    let name = ''
    store
      .pipe(select(playersSelectors.getPlayersNameById(value)))
      .subscribe(data => name = data)
      .unsubscribe()

    return name;
  }


}
