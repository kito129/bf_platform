import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LiveRow} from '../../../../model/live/liveRunner';
import {Observable, of, Subject} from 'rxjs';

@Component({
  selector: 'app-live-dragula-element',
  templateUrl: './live-dragula-element.component.html',
  styles: [`
    table, tbody, tr, th, td {
      border: 1 0 0 0;
      padding: 0;
      margin: 2 0 0 0;
      border-collapse: collapse;
      border-spacing: 0;
    }

    td {
      line-height: 20px;
      vertical-align: middle;
      border-spacing: 0;
    }

    .selectedA {
      border-right: solid 10px red;
      border-left: solid 5px red;
      padding-left: 2px;
    }

    .selectedB {
      border-right: solid 10px green;
      border-left: solid 5px green;
      padding-left: 2px;
    }

    .selectedC {
      border-right: solid 10px yellow;
      border-left: solid 5px yellow;
      padding-left: 2px;
    }
  `
  ]
})
export class LiveDragulaElementComponent implements OnInit {

  @Input() row: LiveRow
  @Input() index: number
  @Output() changeEmitter = new EventEmitter()

  @Input() multiple: number

  toUpdate = false

  colorPalette:Array<any> = [
    '#ffffff',
    '#d2d2d2',
    '#969696',
    '#707070',
    '#3b3b3b',
    '#ff8a8a',
    '#dd3106',
    '#691702',
    '#ffaf4d',
    '#ff6600',
    '#fff9a3',
    '#fff302',
    '#aea100',
    '#816417',
    '#533f0f',
    '#aefa93',
    '#47f10d',
    '#5f8a4e',
    '#247206',
    '#194e06',
    '#89bbff',
    '#44ffff',
    '#2f77d6',
    '#11509d',
    '#061a88',
    '#f6c2fc',
    '#f688ff',
    '#e311fa',
    '#8712d9',

  ]


  runnerAid: Observable<number>[] = []
  runnerBid: Observable<number>[] = []

  constructor() {
    this.runnerAid.push(new Observable(observer => {
      observer.next(0)
    }))
    this.runnerAid.push(new Observable(observer => {
      observer.next(0)
    }))
    this.runnerBid.push(new Observable(observer => {
      observer.next(0)
    }))
    this.runnerBid.push(new Observable(observer => {
      observer.next(0)
    }))


  }
  ngOnInit(): void {

    this.runnerAid[0] = new Observable(observer => {
      observer.next(this.row.a[0].runnerId)
    })
    this.runnerAid[1] = new Observable(observer => {
      observer.next(this.row.a[1].runnerId)
    })
    this.runnerBid[0] = new Observable(observer => {
      observer.next(this.row.b[0].runnerId)
    })
    this.runnerBid[1] = new Observable(observer => {
      observer.next(this.row.b[1].runnerId)
    })

  }


  update(){
    this.changeEmitter.emit([this.index, this.row])
    this.toUpdate = false
  }

  setSide(index: number, isA: boolean, text: string){
    if(isA){
      this.row.a[index].side = text
      if(text === 'up'){
        this.row.b[index].side = 'down'
      } else {
        this.row.b[index].side = 'up'
      }
    } else {
      this.row.b[index].side = text
      if(text === 'up'){
        this.row.a[index].side = 'down'
      } else {
        this.row.a[index].side = 'up'
      }
    }
    this.update()
  }

  setSideNull(event, index: number){
    event.preventDefault()
    this.row.a[index].side = ''
    this.row.b[index].side = ''
    this.update()
  }

  updateText(){
    this.toUpdate = true
  }

  removeRow(){
    this.row = {
      isDouble: false,
      valid: false,
      a: [
        {
          notInDb: false,
          runnerId: 0,
          name:  '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
      ],
      b: [
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
      ],
    }
    this.update()
  }

  generateRow(){
    this.row = {
      isDouble: false,
      valid: true,
      a: [
        {
          notInDb: false,
          runnerId: 0,
          name:  '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
      ],
      b: [
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
        {
          notInDb: false,
          runnerId: 0,
          name: '',
          side: '',
          note: '',
          color: [
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            },
            {
              shirt: '',
              pants:  '',
              cap:  '',
              shoes:  '',
            }
          ]
        },
      ],
    }
    this.update()
  }

  notInDb(index: number, isA: boolean){
    if(isA){
      if(this.row.a[index].notInDb){
        this.runnerAid[index] = new Observable(observer => {
          observer.next(0)
        })
        this.row.a[index].name = ''
        this.row.a[index].runnerId = 0
      }
    } else {
      if(this.row.b[index].notInDb){
        this.runnerBid[index] = new Observable(observer => {
          observer.next(0)
        })
        this.row.b[index].name = ''
        this.row.b[index].runnerId = 0
      }
    }
    this.update()
  }

  removeColor(clickEvent, index: number, element: 'shirt' | 'pants' | 'cap' | 'shoes', isA: boolean, colorIndex: number){
    clickEvent.preventDefault()
    this.setColor(index, element, '', isA, colorIndex)
    this.update()
  }

  setSingle(){
    this.row.a[0].notInDb = false
    this.row.a[1].notInDb = false
    this.row.b[0].notInDb = false
    this.row.b[1].notInDb = false
  }

  setDouble(){
    this.row.a[0].notInDb = true
    this.row.a[1].notInDb = true
    this.row.b[0].notInDb = true
    this.row.b[1].notInDb = true
    this.notInDb(0,true)
    this.notInDb(1,true)
    this.notInDb(0,false)
    this.notInDb(1,false)
  }


  setColor(index: number, element: 'shirt' | 'pants' | 'cap' | 'shoes' , event, isA: boolean, colorIndex: number){
    if(isA){
      if(element==='shirt'){
        this.row.a[index].color[colorIndex].shirt = event
      } else if(element==='pants'){
        this.row.a[index].color[colorIndex].pants = event
      } else if(element==='cap'){
        this.row.a[index].color[colorIndex].cap = event
      } else if(element==='shoes'){
        this.row.a[index].color[colorIndex].shoes = event
      }
    } else {
      if(element==='shirt'){
        this.row.b[index].color[colorIndex].shirt = event
      } else if(element==='pants'){
        this.row.b[index].color[colorIndex].pants = event
      } else if(element==='cap'){
        this.row.b[index].color[colorIndex].cap = event
      } else if(element==='shoes'){
        this.row.b[index].color[colorIndex].shoes = event
      }
    }
    this.update()

  }

  setRunner(isA: boolean,event ,index: number){
    if(isA){
      this.row.a[index].runnerId = event[0].id
      this.row.a[index].name = event[0].name
      this.runnerAid[index] = new Observable(observer => {
        observer.next(this.row.a[index].runnerId)
      })

    } else {
      this.row.b[index].runnerId = event[0].id
      this.row.b[index].name = event[0].name
      this.runnerBid[index] = new Observable(observer => {
        observer.next(this.row.b[index].runnerId)
      })
    }
    this.update()
  }

}
