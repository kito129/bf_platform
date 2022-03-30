import {Component , OnInit,} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {IsLoading} from '../../../../model/isLoading';
import * as runnersSelectors from '../../../../store/runners/runners.selectors';
import {Runner} from '../../../../model/runner/runner';

@Component({
  selector: 'app-list-runners',
  templateUrl: './runners-list.component.html',
})
export class RunnersListComponent implements OnInit {

  allRunners$: Observable<Runner[]>
  isLoadingAllRunners$: Observable<IsLoading>



  constructor(private readonly store: Store) {

    this.allRunners$ = this.store.pipe(select(runnersSelectors.getAllRunners))
    this.isLoadingAllRunners$ = this.store.pipe(select(runnersSelectors.isLoadingAllRunners))

  }

  ngOnInit(): void {
  }

}
