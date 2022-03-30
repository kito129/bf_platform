import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  returnUrl: any;
  error: boolean = false

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router, private route: ActivatedRoute) {

    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin(e) {
    e.preventDefault();
    // HERE CALL SERVICE TO AUTHENTICATE AND SAVE TOKEN IN LOCAL STORAGE
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password,this.returnUrl)
    }
  }



}
