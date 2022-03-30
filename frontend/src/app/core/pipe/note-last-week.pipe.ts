import { Pipe, PipeTransform } from '@angular/core';
import {Note} from "../../model/note/note";

@Pipe({
  name: 'noteLastWeek'
})
export class NoteLastWeekPipe implements PipeTransform {

  transform(notes: Note[]): boolean {
    let today = Date.now()
    notes.forEach( n=> {
      if (today - n.created < 1000 * 60 * 60 * 24 * 7) {
        return true
      }
    })
    return false
  }
}
