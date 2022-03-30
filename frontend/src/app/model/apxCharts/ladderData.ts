import {LadderLevel} from '../calculator/ladder';
import {Observable, of, Subject} from 'rxjs';

const LADDERS = 1000
const INCREMENTAL = [
  {min:1,max: 1.99,size:0.01},
  {min:2,max: 2.98,size:0.02},
  {min:3,max: 3.95,size:0.05},
  {min:4,max: 5.90,size:0.1},
  {min:6,max: 9.80,size:0.2},
  {min:10,max: 19.5,size:0.5},
  {min:20,max: 49,size:1},
  {min:50,max: 95,size:5},
  {min:100,max: 1000,size:10},
]

export class LadderData {

  ladder: number[] = []
  ladderLabels: string[] = []
  dataA: number[] = []
  dataB: number[] = []


  public generateLadderArray() {
    let j = 0
    let i = 1.01
    let lastIncremental = 0
    const margin = 0.001
    let tickCount = 0

    while (i <= LADDERS) {
      j = 0
      while (j < INCREMENTAL.length) {
        if (i >= (INCREMENTAL[j].min - margin) && i <= (INCREMENTAL[j].max + margin)) {
          this.ladder.push(i)
          this.ladderLabels.push(i.toFixed(2))
          tickCount++
          i = +(i + INCREMENTAL[j].size).toFixed(2)
          lastIncremental = INCREMENTAL[j].size
          break
        } else if (j === INCREMENTAL.length - 1) {
          i = i + lastIncremental
        }
        j++;
      }
    }
  }

  public countTd(inputA: {
                   timestamp: number,
                   ltp: number,
                   tv: number,
                   trd: number[][],
                   batb: number[][],
                   batl: number[][],
                 }[],
                 inputB: {
                   timestamp: number,
                   ltp: number,
                   tv: number,
                   trd: number[][],
                   batb: number[][],
                   batl: number[][],
                 }[],
                 time: number) {
    this.dataA = []
    for (let j = 0; j < 360; j++) {
      this.dataA.push(0)
    }
    this.dataB = []
    for (let j = 0; j < 360; j++) {
      this.dataB.push(0)
    }

    let i = 0
    while (+inputA[i].timestamp <= time && i < inputA.length) {
      if (inputA[i].trd) {
        // tslint:disable-next-line:prefer-for-of
        for (let h = 0; h < inputA[i].trd.length; h++) {
          const index = this.ladder.indexOf(inputA[i].trd[h][0])
          this.dataA[index] = Math.round(this.dataA[index] + (inputA[i].trd[h][1]-this.dataA[index]))
        }
      }
      i++
    }

    i=0
    while (+inputB[i].timestamp <= time && i < inputB.length) {
      if (inputB[i].trd) {
        // tslint:disable-next-line:prefer-for-of
        for (let h = 0; h < inputB[i].trd.length; h++) {
          const index = this.ladder.indexOf(inputB[i].trd[h][0])
          this.dataB[index] = Math.round(this.dataB[index] + (inputB[i].trd[h][1]-this.dataB[index]))
        }
      }
      i++
    }
  }
}
