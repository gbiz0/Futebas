import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimesService {
  //key: string = 'test_fd685222e0ba3c43d446666fe38975';

  constructor(private httpClient:HttpClient) { }

  getTimes(): Observable<any> {

    return this.httpClient.get<any>('https://apiv3.apifootball.com/?action=get_standings&league_id=99&APIkey=8188079a72fd96a274555e4e1b52c86c5f54ef4a72ad6a66c6c547562595edfb');
  }
}
