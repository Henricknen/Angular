import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Momento } from '../momento';

import { Resposta } from '../resposta';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/momentos`

  constructor(private http: HttpClient) { }

  getMomentos(): Observable<Resposta<Momento[]>> {    /* metodo responssavel por trazer todos os momentos */
    return this.http.get<Resposta<Momento[]>>(this.apiUrl);
}

  createMomento(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
