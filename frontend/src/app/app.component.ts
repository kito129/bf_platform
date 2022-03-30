import { Component, OnInit } from '@angular/core';

import {Store} from "@ngrx/store";
import {AuthService} from "./services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'bf-platform';

  constructor(private readonly store: Store,
              private authServices: AuthService,
              private router: Router,) {}


  ngOnInit(){
    if(localStorage.getItem('isLoggedin')){
      // get all data
      this.authServices.callDataAfterFirstLogin()
    }
  }
}
