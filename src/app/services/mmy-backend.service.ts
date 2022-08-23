import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MmyBackendService {

  constructor(private http: HttpClient) {
  }

  weeklyFeeds ( UserId: number, weekNo: number): Observable<any>{
    return this.http.get(environment.mmyBackend + '/api/weekly-feeds/'+ UserId + '/'+ weekNo );
  }

}
