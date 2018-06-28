import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  private baseUrl: String = 'http://localhost:3302';
  constructor(private  http: HttpClient) { }

  public getFormsList() {
      return this.http.get(this.baseUrl + '/forms/').toPromise();
  }

  public getFormDetail(id) {
    return this.http.get(this.baseUrl + '/forms/id/' + id).toPromise();
  }
}