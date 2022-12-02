import {Component, Input, OnInit} from '@angular/core';
import {RunnerInfo} from '../../../../../model/runner/runner'
import {GoogleSearchTabServiceService} from "../../../../../services/google-search-tab-service.service";

@Component({
  selector: 'app-runner-detail-info',
  templateUrl: './runner-detail-info.component.html',
})
export class RunnerDetailInfoComponent implements OnInit {

  @Input()
  runnerInfo: RunnerInfo

  constructor(private google: GoogleSearchTabServiceService) { }

  ngOnInit(): void {
  }



  searchMarketNameGoogle(toSearch: string){
    this.google.searchMarketNameGoogle(toSearch,'flashscore')
  }

}
