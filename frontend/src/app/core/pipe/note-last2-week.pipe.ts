import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../../model/note/note";

@Pipe({
  name: 'noteLast2Week'
})
export class NoteLast2WeekPipe implements PipeTransform {

  transform(notes: Note[]): boolean {
    let today = Date.now()
    notes.forEach( n=> {
      if (today - n.created < 1000 * 60 * 60 * 24 * 14) {
        return true
      }
    })
    return false
  }

}
