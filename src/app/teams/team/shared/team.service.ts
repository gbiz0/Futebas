import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  publicKey = ''
  hash = ''
  urlAPI = 'https://api.api-futebol.com.br/v1/times/{time_id}'
  constructor(public http: HttpClient) {}
      getAllTeams(): Observable<any> {
        return this.http.get<any>(this.urlAPI)
        .pipe(map((data: any) => data.data.results))
      }
}
