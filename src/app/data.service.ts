import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:8081/api/get_data';
  constructor(private http:HttpClient) { }

  getData():Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
