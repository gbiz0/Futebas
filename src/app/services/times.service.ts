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

    const headers = new HttpHeaders({
      'Authorization': 'Bearer test_fd685222e0ba3c43d446666fe38975',
    });

    const requestOptions = { headers: headers };

    return this.httpClient.get<any>('https://api.api-futebol.com.br/v1/campeonatos/10/tabela', requestOptions);
  }
}
