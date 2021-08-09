import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseURL: string = environment.url;
  constructor(private http: HttpClient) {
    console.log("baseUrl", environment.url);
  }

  addDataAPIs(endPoint: string, body: object): Observable<any> {
    let url = `${this.baseURL + endPoint}`;
    return this.http.post(url, body)
  }
}
