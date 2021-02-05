import { environment, endpoint } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileCharacterService {

  constructor(private http: HttpClient) { }

  getCharacterById(id) {
    return this.http.get<any>(endpoint.mortyAPI + id)
  }
}
