import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {DOCUMENT} from "@angular/common";
import {Params} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private lastAuthCode: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private http: HttpClient) {
  }

  login() {
    const param =
      `?client_id=${environment.authConfig.client_id}` +
      `&client_secret=${environment.authConfig.client_secret}` +
      `&redirect_uri=${environment.authConfig.redirect_uri}` +
      `&response_type=${environment.authConfig.response_type}`;
    this.document.location.href = environment.authConfig.authUrl + param;
  }

  login1() {
    this.http.get(environment.authConfig.authUrl, {
      params: {
        client_id: 'fwB3MSTlVyyU9tfXUMTCy6AMvULIVzcwelMSQ1gO',
        client_secret: 'r4oX7ng95kFoZD5FCQkkZlEkO90wykPs35OxjJkq',
        redirect_uri: 'http://localhost:3000',
        response_type: 'code',
      }
    })
  }

  async loginCallback(params: Params) {
    this.lastAuthCode = params['code'];
    await this.http.post(environment.authConfig.accessTokenUrl, {
      grant_type: 'authorization_code',
      client_id: 'fwB3MSTlVyyU9tfXUMTCy6AMvULIVzcwelMSQ1gO',
      client_secret: 'r4oX7ng95kFoZD5FCQkkZlEkO90wykPs35OxjJkq',
      code: this.lastAuthCode,
      // redirect_uri:'http://localhost:3000',
    }).toPromise();

  }
}
