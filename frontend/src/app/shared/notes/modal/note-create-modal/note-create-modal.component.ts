import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../../../model/note/note';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TennisTournament} from '../../../../model/tennisTournament/tennisTournament';

@Component({
  selector: 'app-note-create-modal',
  templateUrl: './note-create-modal.component.html',
})
export class NoteCreateModalComponent implements OnInit {

  // @ts-ignore
  @Output() addNoteEmitter = new EventEmitter();

  isInjuredA = false
  isInjuredB = false

  public note: Note
  public typeOfNote= ['Note','Medical', 'WalkOver', 'No Med Retired']
  public phase = ['Qualifying' ,'1/128', '1/64', '1/32', '1/16', '1/8', 'Quarter', 'Semifinals', 'Finals']

  constructor(private modalService: NgbModal) {

  }

  ngOnInit(): void {

    this.constructNote()

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {

      // check if walkover
      if(this.note.note.type.indexOf('WalkOver')!==-1){
        this.note.note.validation.isValidated = true
      }

      // update injured id
      if(this.isInjuredA){
        this.note.note.selection.injuredId = this.note.note.selection.runnerA.id
      } else if(this.isInjuredB){
        this.note.note.selection.injuredId = this.note.note.selection.runnerB.id
      }

      this.addNoteEmitter.emit([this.note,result])
    }).finally(()=>{
      // reset for next input
      this.constructNote()
    })
  }

  updateRunner(event, runner: string){
    if(runner==='A'){
      this.note.note.selection.runnerA.id = event[0].id
      this.note.note.selection.runnerA.name = event[0].name
    } else {
      this.note.note.selection.runnerB.id = event[0].id
      this.note.note.selection.runnerB.name = event[0].name
    }
  }

  updateTennisTournament(event){
    this.note.note.tournamentId = event[0].id
    this.note.note.tournament = event[0].name
  }

  setBSPodds(event, isA: boolean){
    if(isA){
      this.note.note.selection.runnerA.bsp = event[0]
    } else {
      this.note.note.selection.runnerB.bsp = event[0]
    }
  }

  setCurrentOdds(event, isA: boolean){
    if(isA){
      this.note.note.selection.runnerA.odds = event[0]
    } else {
      this.note.note.selection.runnerB.odds = event[0]
    }
  }


  updateDate(event){
    this.note.created = event[0]
  }

  public updateTennisPoint(event){
    if(event[0]){
      this.note.note.tennisPoints = event[0]
    }
  }

  public updateValidationTennisPoint(event){
    if(event[0]){
      this.note.note.validation.tennisPoints = event[0]
    }
  }


  private constructNote(){
    this.note = {
      created: new Date().getTime(),
      lastUpdate: new Date().getTime(),
      note: {
        description: '',
        tournament: '',
        tournamentId: '',
        phase: '',
        type: '',
        selection: {
          runnerA: {
            name: '',
            id: 0,
            bsp: 1.01,
            odds: 1.01,
          },
          runnerB: {
            name: '',
            id: 0,
            bsp: 1.01,
            odds: 1.01,
          },
          injuredId: 0
        },
        tennisPoints: {
          set1: {
            runnerA: 0,
            runnerB: 0
          },
          set2: {
            runnerA: 0,
            runnerB: 0
          },
          set3: {
            runnerA: 0,
            runnerB: 0
          },
          set4: {
            runnerA: 0,
            runnerB: 0
          },
          set5: {
            runnerA: 0,
            runnerB: 0
          },
          currentGame: {
            runnerA: '0',
            runnerB: '0',
            server: '0',
          },
        },
        detailType:{
          isInPlay: false,
          isNotInPause: false,
          recall: false,
        },
        validation: {
          validationNote: '',
          isValidated: true,
          tennisPoints: {
            set1: {
              runnerA: 0,
              runnerB: 0
            },
            set2: {
              runnerA: 0,
              runnerB: 0
            },
            set3: {
              runnerA: 0,
              runnerB: 0
            },
            set4: {
              runnerA: 0,
              runnerB: 0
            },
            set5: {
              runnerA: 0,
              runnerB: 0
            },
            currentGame: {
              runnerA: '0',
              runnerB: '0',
              server: '0',
            },
          },
          detailValidation:{
            win: false,
            lose: false,
            retired: false,
          }
        }
      }
    };

    this.isInjuredA = false
    this.isInjuredB = false
  }


}

export function findTournamentNameById(id: string, tournamentList: TennisTournament[]){

  for(const tennis of tournamentList){
    if(tennis._id===id){
      let challenger = ' '
      if(tennis.tournament.detail.type.isChallenger){
        challenger =  ' CHALLENGER '
      }
      return tennis.tournament.detail.type.federation + challenger +  tennis.tournament.detail.name + ' ' + new Date(tennis.tournament.detail.openDate).getFullYear()
    }
  }



}
