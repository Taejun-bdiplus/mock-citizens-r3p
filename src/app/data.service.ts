import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  submitLoanData(data: any): Observable<any> {
    const apiUrl = 'https://r3p.p2.ocp.citizensbank.com/r3p-pipeline/review';
    return this.http.post(apiUrl, data);
  }

  // getColleague api
  private baseUrl = 'https://r3p.p2.ocp.citizensbank.com/r3p-pipeline';
  selectAnalyst(payload: any): Observable<any> {
    const url = `${this.baseUrl}/colleague`;
    return this.http.post(url, payload);
  }
}
