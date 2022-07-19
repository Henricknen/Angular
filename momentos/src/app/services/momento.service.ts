import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Momento } from '../momento';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/momentos`

  constructor(private http: HttpClient) { }

  createMomento(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}
