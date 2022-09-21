import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Strategy} from '../../../../../model/report/strategy';

@Component({
  selector: 'app-strategy-create-modal',
  templateUrl: './strategy-create-modal.component.html',
})
export class StrategyCreateModalComponent implements OnInit {

  @Output()
  addStrategyCreateEmitter = new EventEmitter();

  public sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING']

  public strategy: Strategy
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

    this.constructStrategy()

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {


      this.addStrategyCreateEmitter.emit([this.strategy,result])
    }).finally(()=>{
      // reset for next input
      this.constructStrategy()
    })
  }

  private constructStrategy(){
    this.strategy = {
      created: new Date().getTime(),
      lastUpdate: new Date().getTime(),
      strategy: {
        info: {
          name: '',
          sport: '',
          year: 200,
          moneyManagement: '',
          executor: "",
          bank: 0,
          stake: 0,
          typeOfStake: '',
          detail: {
            description: '',
            entryDescription: '',
            exitDescription: '',
            mmDescription: '',
          }
        }
      }
    }

  }


}
