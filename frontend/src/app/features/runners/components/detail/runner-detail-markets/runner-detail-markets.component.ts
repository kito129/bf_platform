import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {MarketInfoBasic} from '../../../../../model/market/basic/marketInfoBasic';
import {ActivatedRoute, Router} from '@angular/router';
import {MarketSelectionInfo} from '../../../../../model/market/marketSelectionInfo';
import {MarketForRunnersMarket} from '../../../../../model/market/marketForRunnersMarket';

@Component({
  selector: 'app-runner-detail-markets',
  templateUrl: './runner-detail-markets.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class RunnerDetailMarketsComponent implements OnInit {

  @Input() runnerMarkets: MarketSelectionInfo[]
  @Input() runnerId: number
  public openState= false


  data: MarketForRunnersMarket[] = []

  @ViewChild(DatatableComponent) table: DatatableComponent

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  columns = [
    { name: 'date', sortable: true},
    { prop: 'Hour', sortable: true},
    { prop: 'Name', sortable: true},
    { prop: 'Selection BSP', sortable: true},
    { prop: 'Selection BSP', sortable: true},
    { prop: 'Selection Min', sortable: true},
    { prop: 'Winner', sortable: true},
    { prop: 'Open', sortable: false},
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,) {
  }

  ngOnInit(): void {

    for (const market of this.runnerMarkets) {
      this.data.push(new MarketForRunnersMarket(market))
    }
    this.temp = this.data
    this.rows = this.data
  }

  changeOpenState(){
    this.openState = this.openState !== true;
  }

  clickOnWinnerRunners(id: number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/runners/detail/'+id]));
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter( (market: MarketSelectionInfo)=> {
      return (market.name.toLowerCase().indexOf(val) !== -1) || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
