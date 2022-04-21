import { Pipe, PipeTransform } from '@angular/core';
import {TennisPoint} from '../../model/point/tennisPoint';

@Pipe({
  name: 'tennisPoint'
})
export class TennisPointPipe implements PipeTransform {

  transform(point: TennisPoint, wantGame?: boolean, wantServer?: boolean){

    const set = checkSet(point)

    switch (set){
      case (0):{
        return '-' + appendGame(point, wantGame) + appendServer(point,wantServer)
      }
      case (1):{
        return point.set1.runnerA.toString()+  point.set1.runnerB.toString() + appendGame(point, wantGame) + appendServer(point,wantServer)
      }
      case (2):{
        return point.set1.runnerA.toString() + point.set1.runnerB.toString() + '-' + point.set2.runnerA.toString() + point.set2.runnerB.toString()
          + appendGame(point, wantGame) + appendServer(point,wantServer)
      }
      case (3):{
        return point.set1.runnerA.toString() + point.set1.runnerB.toString() + '-' + point.set2.runnerA.toString() + point.set2.runnerB.toString()
          + '-' + point.set3.runnerA.toString() + point.set3.runnerB.toString()
          + appendGame(point, wantGame) + appendServer(point,wantServer)
      }
      case (4):{
        return point.set1.runnerA + point.set1.runnerB.toString() + '-' + point.set2.runnerA.toString() + point.set2.runnerB.toString() + '-'
          + point.set3.runnerA + point.set3.runnerB.toString() + '-' + point.set4.runnerA.toString() + point.set4.runnerB.toString()
          + appendGame(point, wantGame) + appendServer(point,wantServer)
      }
      case (5):{
        return point.set1.runnerA + point.set1.runnerB.toString() + '-' + point.set2.runnerA + point.set2.runnerB.toString() + '-'
          + point.set3.runnerA + point.set3.runnerB.toString() + '-' + point.set4.runnerA + point.set4.runnerB.toString()
          + '-' + point.set5.runnerA + point.set5.runnerB.toString()
          + appendGame(point, wantGame) + appendServer(point,wantServer)
      }

    }
  }

}

function checkSet(point: TennisPoint){

  if((point.set1.runnerA === 0 || point.set1.runnerA===null)  && (point.set1.runnerB ===0 || point.set1.runnerB===null)){
    return 0
  } else if((point.set2.runnerA === 0 || point.set2.runnerA===null)  && (point.set2.runnerB ===0 || point.set2.runnerB===null)){
    return 1
  } else if((point.set3.runnerA === 0 || point.set3.runnerA===null)  && (point.set3.runnerB ===0 || point.set3.runnerB===null)){
    return 2
  } else if((point.set4.runnerA === 0 || point.set4.runnerA===null)  && (point.set4.runnerB ===0 || point.set4.runnerB===null)){
    return 3
  } else if((point.set5.runnerA === 0 || point.set5.runnerA===null)  && (point.set5.runnerB ===0 || point.set5.runnerB===null)){
    return 4
  } else {
    return 5
  }
}

function appendGame(point: TennisPoint, wantGame: boolean){
  if(!((point.currentGame.runnerA=== '0' || point.currentGame.runnerA=== null) && (point.currentGame.runnerB=== '0' || point.currentGame.runnerB=== null)) && wantGame){
    return ' / ' + point.currentGame.runnerA + ':' + point.currentGame.runnerB
  } else {
    return ''
  }
}

function appendServer(point: TennisPoint, wantServer: boolean){
  if((point.currentGame.server==='A' || point.currentGame.server==='B') &&  wantServer ){
    return ' s: ' + point.currentGame.server
  } else {
    return '';
  }
}
