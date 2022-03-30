import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbDateStruct, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TennisTournament} from '../../../../../model/tennisTournament/tennisTournament';

@Component({
  selector: 'app-tennis-tournament-create-modal',
  templateUrl: './tennis-tournament-create-modal.component.html',
})
export class TennisTournamentCreateModalComponent implements OnInit {

  @Output()
  addTennisTournamentEmitter = new EventEmitter();

  public tennisTournament: TennisTournament
  public federation= ['ATP','WTA', 'ITF', 'Exhibition']
  public surface= ['HARD','CLAY', 'GRASS', 'INDOOR HARD']
  public point= [0,25,50,60,75,80,100,125,150,200,250,500,1000,2000]


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

    this.constructTennisTournament()

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {

      this.addTennisTournamentEmitter.emit([this.tennisTournament,result])
    }).finally(()=>{
      // reset for next input
      this.constructTennisTournament()
    })
  }

  updateDate(event){
    this.tennisTournament.tournament.detail.openDate = event[0]
  }


  private constructTennisTournament(){

    this.tennisTournament= {
      created: new Date().getTime(),
      lastUpdate: new Date().getTime(),
      tournament: {
        detail: {
          name: '',
          openDate: 0,
          surface: null,
          type: {
            federation: null,
            point: 0,
            isSlam: false,
            isChallenger: false
          },
          qualifying: 16,
          draw: 32
        },
        stats: {
          final: {
            winner: {
              name: '',
              id: 0,
            },
            runnerUp: {
              name: '',
              id: 0,
            },
            semifinalist: [{
              name: '',
              id: 0
            }],
            participants: [{
              name: '',
              id: 0
            }]
          }
        }
      }
    }
  }


}
