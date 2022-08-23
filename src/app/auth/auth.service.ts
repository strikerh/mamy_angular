import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DOCUMENT} from "@angular/common";
import {lastValueFrom, Observable, Subject} from "rxjs";
import jwt_decode from "jwt-decode";
interface User {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lastAuthCode: string = '';


  userSubject: Subject<User> = new Subject<User>()
  readonly user$: Observable<User> = this.userSubject.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient) {
    this.loginOnPageLoad().then();
  }

  async loginOnPageLoad() {
    const url = this.document.location.href;
    const params = url.split('?')[1]?.split('&').map((e) => ({[e.split('=')[0]]: e.split('=')[1]})) || [];
    if (url.includes('code')) {
      const code: any = params.find((p) => p['code']);
      await this.loginCallback(code.code);
      console.log('replaceState', this.document.location.href.split('?')[0]);
      window.history.replaceState(null, '', this.document.location.href.split('?')[0])
    }
  }

  login() {
    const param =
      `?client_id=${environment.authConfig.client_id}` +
      `&client_secret=${environment.authConfig.client_secret}` +
      `&redirect_uri=${this.document.location.href.split('?')[0]}` +
      `&response_type=${environment.authConfig.response_type}`;
    this.document.location.href = environment.authConfig.authUrl + param;
  }


  async loginCallback(code: string) {
    this.lastAuthCode = code;
    const resultAccessToken: any = await lastValueFrom(this.http.post(environment.authConfig.accessTokenUrl, {
      grant_type: environment.authConfig.grant_type,
      client_id: environment.authConfig.client_id,
      client_secret: environment.authConfig.client_secret,
      code: this.lastAuthCode,
      redirect_uri: this.document.location.href.split('?')[0],
    }));
    resultAccessToken.jwt = jwt_decode(resultAccessToken.access_token);
    localStorage.setItem('authData', JSON.stringify(resultAccessToken));
  }
}
