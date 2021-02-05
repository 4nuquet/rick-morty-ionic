import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  endpoint = 'https://rickandmortyapi.com/api/character'
  constructor(private http: HttpClient
  ) {}


  getAll(){
    return this.http.get<any>(this.endpoint);
  }
}
