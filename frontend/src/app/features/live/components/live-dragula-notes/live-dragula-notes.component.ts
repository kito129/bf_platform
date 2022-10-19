import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as notesSelectors from '../../../../store/notes/notes.selectors';
import {Observable, Subject} from 'rxjs';
import {Note} from '../../../../model/note/note';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbCollapse} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-live-dragula-notes',
  templateUrl: './live-dragula-notes.component.html',
  styles: [`
    .myClass { overflow: hidden }
    .popOverClass{
      width: 700px;
    .my-custom-class .tooltip-inner {
      font-size: 200%;
    }
  `]
})
export class LiveDragulaNotesComponent implements OnInit,OnDestroy {

  @Input() runnerId$: Observable<number>
  @Input() allNotes: Note[]
  @Input() runnerName: string
  runnerId = null

  runnerNotes: Note[]


  destroy$: Subject<boolean> = new Subject<boolean>();

  runnerOtherNotes: Note[] = []
  runnerRetiredNotes: Note[] = []
  runnerLastWeekNotes: Note[] = []
  runnerLast3WeekNotes: Note[] = []

  isCollapsedRetired = false;
  isCollapsedLastWeekNotes = false;
  isCollapsedLast3WeekNotes = false;
  isCollapsedAll = false;

  runnerStats = {
    medical: 0,
    medicalLost: 0,
    medicalWin: 0,
    medicalRetired: 0,
    noMedicalRetired: 0,
  }

  color = 'btn-outline-light'

  today = Date.now()

  closeResult = '';

  constructor(private readonly store: Store,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {

  }

  ngOnInit(): void {

    this.runnerId$
      .pipe(takeUntil(this.destroy$))
      .subscribe( id => {
        if(id){
          this.runnerId = id
          // get runner notes
          this.runnerNotes = this.allNotes.filter( x => x.note.selection.injuredId === this.runnerId)

          if(this.runnerNotes.length){
            // empty all
            this.runnerOtherNotes = []
            this.runnerRetiredNotes= []
            this.runnerLastWeekNotes= []
            this.runnerLast3WeekNotes = []

            // tslint:disable-next-line:prefer-for-of
            for (let i=0; i< this.runnerNotes.length; i++){
              const note: Note = this.runnerNotes[i]
              // counter for stats
              if(note.note.type==='Medical' ) {
                this.runnerStats.medical++
              }
              if(note.note.validation.detailValidation.retired ){
                this.runnerStats.medicalRetired++
                this.runnerStats.medicalLost++
                this.runnerRetiredNotes.push(note)
              }
              if(note.note.type==='No Med Retired' ) {
                this.runnerStats.noMedicalRetired++
                this.runnerStats.medicalLost++
              }
              if(note.note.validation.detailValidation.lose && note.note.type==='Medical' ){
                this.runnerStats.medicalLost++
              }
              if(note.note.validation.detailValidation.win && note.note.type==='Medical' ){
                this.runnerStats.medicalWin++
              }
              // check for color
              if(this.today - note.created < 1000 * 60 * 60 * 24 * 10){
                this.runnerLastWeekNotes.push(note)
                i--
              } else if(this.today - note.created > 1000 * 60 * 60 * 24 * 10 && this.today - note.created < 1000 * 60 * 60 * 24 * 25){
                this.runnerLast3WeekNotes.push(note)
              }
            }
            if(this.runnerRetiredNotes.length>0){
              this.color = 'btn-outline-success'
            }
            if(this.runnerLast3WeekNotes.length>0){
              this.color = 'btn-outline-warning'
            }
            if(this.runnerLastWeekNotes.length>0){
              this.color = 'btn-outline-danger'
            }
          }
        }
      })


  }


  changeRetiredState(){
    this.isCollapsedRetired = this.isCollapsedRetired !== true;
  }
  changeLastWeekState(){
    this.isCollapsedLastWeekNotes = this.isCollapsedLastWeekNotes !== true;
  }
  changeLast3State(){
    this.isCollapsedLast3WeekNotes = this.isCollapsedLast3WeekNotes !== true;
  }
  changeLastAllState(){
    this.isCollapsedAll = this.isCollapsedAll !== true;
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl',
      // centered: true
    }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  clickNote(runnerId: number){
    this.modalService.dismissAll()
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/runners/detail/'+runnerId]));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
