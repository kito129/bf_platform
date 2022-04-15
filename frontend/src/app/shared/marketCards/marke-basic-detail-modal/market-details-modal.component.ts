import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MarketAdvancedService} from '../../../services/market-advanced.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-market-details-modal',
  templateUrl: './market-details-modal.component.html',
})
export class MarketDetailsModalComponent implements OnInit,OnDestroy {

  @Input() marketId: string
  @Input() text: string
  @Input() isBasic: boolean
  @Input() asString: boolean
  @Input() wantUpdate: boolean

  basicHaveAdv = false

  closeResult = ''

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: NgbModal,
              private marketAdvService: MarketAdvancedService) { }

  ngOnInit(): void {

  }

  openModal(content) {
    // check if advanced present
    this.marketAdvService.chekMarketAdvancedPreset(this.marketId)
      .pipe(takeUntil(this.destroy$))
      .subscribe( check => {
        this.basicHaveAdv = check.indexOf('notPresent') === -1;
      })

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

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
