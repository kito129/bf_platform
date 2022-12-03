import {Component, OnInit, Inject, Renderer2, OnDestroy} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {select, Store} from '@ngrx/store';
import {AuthService} from '../../../services/auth.service';
import {Observable, of, OperatorFunction, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {MarketAdvancedService} from '../../../services/market-advanced.service';
import {Router} from '@angular/router';
import * as reportSelectors from '../../../store/report/report.selectors';
import * as reportActions from '../../../store/report/report.actions';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  $backtestMode: Observable<boolean>
  $backtestTradesCount: Observable<number>

  public model: string
  response: any = ''
  found = false
  errorMsg: string;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private authService: AuthService,
    private marketAdvancedService: MarketAdvancedService,
    private store: Store,
    private router: Router) { }

  ngOnInit(): void {

    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))
    this.$backtestTradesCount = this.store.pipe(select(reportSelectors.getBacktestCurrentTradesCount))
  }

  // format name from service
  formatter = (result: string) => {
    if(result.split('[')[2]){
      this.found = true
      return result.split(']', 1)[0].split('[')[1] + '  -  ' + result.split('[')[2].split(']')[0]
    } else {
      return 'Nothing found..'
    }
  }

  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(900),
      distinctUntilChanged(),
      switchMap( (searchText) =>  this.marketAdvancedService.getAllMarketsInfoByName(searchText)
        .pipe(
          catchError(error => {
            this.found= false
            this.errorMsg = `Error: ${error.error.message}`;
            return of([]);
          })
        )
      ))

  goToMarket(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>{
      if(this.found){
        const link = this.model.split('[')[3].split(']')[0]
        this.model = this.model.split(']',1)[0].split('[')[1] + '  -  ' + this.model.split('[')[2].split(']')[0]
        this.router.navigate(['/marketAdvanced/detail/'+link])
      }
    })
  }

  backtestModeChange(){

  }

  backtestTradesPreview(event: MouseEvent){
    event.preventDefault();
    console.log('open modal with preview')
  }

  refreshAll(){
    this.authService.refreshAllData()
  }

  onLogout() {
    this.authService.logout()
  }

  toggleSidebar(e) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
