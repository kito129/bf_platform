import {OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as runnerSelectors from '../../store/runners/runners.selectors';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Pipe({
  name: 'runnerNamePipe'
})
export class RunnerNamePipePipe implements PipeTransform {

  destroy$: Subject<boolean> = new Subject<boolean>();

  transform(value: number, store: Store): string {

    let runnerName = ''
    store
      .pipe(select(runnerSelectors.getRunnerNameById(value)))
      .subscribe(data => runnerName = data.name)
      .unsubscribe()

    return runnerName;
  }


}
