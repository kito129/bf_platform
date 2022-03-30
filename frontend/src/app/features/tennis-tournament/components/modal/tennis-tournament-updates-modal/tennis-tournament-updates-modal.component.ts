import {Component, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import {TennisTournament} from "../../../../../model/tennisTournament/tennisTournament";

@Component({
  selector: 'app-tennis-tournament-updates-modal',
  templateUrl: './tennis-tournament-updates-modal.component.html',
})
export class TennisTournamentUpdatesModalComponent implements OnInit {

  // @ts-ignore
  @Output()
  tennisTournamentUpdateEmitter = new EventEmitter();
  @Input()
  tennisTournamentInput$: Observable<TennisTournament>

  public federation= ['ATP','WTA', 'ITF', 'Exhibition']
  public surface= ['HARD','CLAY', 'GRASS', 'INDOOR HARD']
  public point= [0,25,50,60,75,80,100,125,150,200,250,500,1000,2000]


  public tennisTournamentOutput: TennisTournament;
  public typeOfTournament= ['WTA','ATP']


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {

    this.tennisTournamentOutput = JSON.parse(JSON.stringify(this.tennisTournamentInput$))

    this.modalService.open(content, {centered: true}).result.then((result) => {

      this.tennisTournamentUpdateEmitter.emit([this.tennisTournamentOutput, result]);
    }).catch((res) => {});
  }

  updateDate(event){
    this.tennisTournamentOutput.tournament.detail.openDate = event[0]
  }

}
