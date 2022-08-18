import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mmy_app';

  constructor(
    private _auth: AuthService,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    debugger
    this._route.queryParams.subscribe((params)=>{
      debugger
      const snap = this._route.snapshot;
      /*if (snap.params['code']) {
        this._auth.loginCallback(snap.params);
      }else {
        this._auth.login();
      }*/
    });

  }
}

