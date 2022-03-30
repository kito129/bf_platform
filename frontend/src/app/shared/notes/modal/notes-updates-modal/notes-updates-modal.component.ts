import {Component, Input, OnInit, Output} from '@angular/core';
import { NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Note} from "../../../../model/note/note";
import {EventEmitter} from "@angular/core";
import {Observable} from "rxjs";

@Component({
  selector: 'app-runner-notes-updates-modal',
  templateUrl: './notes-updates-modal.component.html',
})
export class NotesUpdatesModalComponent implements OnInit {

  // @ts-ignore
  @Output()
  noteEmitter = new EventEmitter();
  @Input()
  noteInput: Observable<Note>

  tournamentSelect?: any[]


  isInjuredA: boolean = false
  isInjuredB: boolean = false

  public noteOutput: Note;
  runnerSelection: any[] = [];
  public typeOfNote= ['Note','Medical', 'WalkOver', 'No Med Retired']
  public phase = ['Qualifying' ,'1/128', '1/64', '1/32', '1/16', '1/8', 'Quarter', 'Semifinals', 'Finals']


  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  updateDate(event){
    this.noteOutput.created = event[0]
  }

  openVerticalCenteredModal(content) {

    this.noteOutput = JSON.parse(JSON.stringify(this.noteInput))
    //check for who is injured
    this.checkInjured()
    this.modalService.open(content, {centered: true}).result.then((result) => {

      // update injured id
      if(this.isInjuredA){
        this.noteOutput.note.selection.injuredId = this.noteOutput.note.selection.runnerA.id
      } else if(this.isInjuredB){
        this.noteOutput.note.selection.injuredId = this.noteOutput.note.selection.runnerB.id
      }

      //check if walkover
      if(this.noteOutput.note.type.indexOf('WalkOver')!==-1){
        this.noteOutput.note.validation.isValidated = true
      }


      this.noteEmitter.emit([this.noteOutput, result]);
    }).catch((res) => {});
  }

  updateTennisTournament(event){
    this.noteOutput.note.tournamentId = event[0].id
    this.noteOutput.note.tournament = event[0].name
  }

  updateRunner(event, runner: string){
    if(runner==='A'){
      this.noteOutput.note.selection.runnerA.id = event[0].id
      this.noteOutput.note.selection.runnerA.name = event[0].name
    } else {
      this.noteOutput.note.selection.runnerB.id = event[0].id
      this.noteOutput.note.selection.runnerB.name = event[0].name
    }
  }

  setBSPodds(event, isA: boolean){
    if(isA){
      this.noteOutput.note.selection.runnerA.bsp = event[0]
    } else {
      this.noteOutput.note.selection.runnerB.bsp = event[0]
    }
  }

  setCurrentOdds(event, isA: boolean){
    if(isA){
      this.noteOutput.note.selection.runnerA.odds = event[0]
    } else {
      this.noteOutput.note.selection.runnerB.odds = event[0]
    }
  }

  public updateTennisPoint(event){
    if(event[0]){
      this.noteOutput.note.tennisPoints = event[0]
    }
  }

  public updateValidationTennisPoint(event){
    if(event[0]){
      this.noteOutput.note.validation.tennisPoints = event[0]
    }
  }


  private checkInjured(){
    if(this.noteOutput.note.selection.injuredId === this.noteOutput.note.selection.runnerA.id){
      this.isInjuredA = true
      this.isInjuredB = false
    } else  if(this.noteOutput.note.selection.injuredId === this.noteOutput.note.selection.runnerB.id){
      this.isInjuredB = true
      this.isInjuredA = false
    }
  }

}


