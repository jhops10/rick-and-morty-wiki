import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiURL = 'https://rickandmortyapi.com/api/character';
  private page: number = 1;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(this.apiURL);
  }

  loadMore(): Observable<Character> {
    this.page += 1;
    return this.http.get<Character>(`${this.apiURL}/?page=${this.page}`);
  }

  searchByName(query: string): Observable<Character> {
    return this.http.get<Character>(`${this.apiURL}/?name=${query}`);
  }
}
