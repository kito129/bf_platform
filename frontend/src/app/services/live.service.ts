import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFireDatabase, AngularFireObject} from "@angular/fire/database";
import {LiveRow} from "../model/live/liveRunner";

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  itemRef: AngularFireObject<any>;
  item$: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.itemRef = db.object('/');
    this.item$ = this.itemRef.valueChanges();
  }

  update(data: LiveRow, index: number) {
    const newRow = {}
    newRow[index-1] = data
    this.itemRef.update(newRow)
  }

  set(data: LiveRow[]){
    this.itemRef.set(data)
  }

}
