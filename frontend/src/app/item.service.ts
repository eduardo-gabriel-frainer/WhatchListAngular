import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Importa o HttpClient
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  baseUrl: string = 'http://localhost:8080/items'

  constructor(private http: HttpClient) { }

  readItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl).pipe(
      map((i: any) => i),
      catchError(e => this.error(e))
    );
  }

  readItemById(id: any): Observable<Item> {
    // Corrigido: Substitua as aspas simples por backticks (`) para interpolação correta
    return this.http.get<Item>(`${this.baseUrl}/${id}`).pipe(
      map((i: any) => i),
      catchError(e => this.error(e))
    );
  }

  CreateItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item).pipe(
      map((i: any) => i),
      catchError(e => this.error(e))
    );
  }

  UpdateItem(item: Item): Observable<Item> {
    // Corrigido: Substitua as aspas simples por backticks (`) para interpolação correta
    return this.http.put<Item>(`${this.baseUrl}/${item.id}`, item).pipe(
      map((i: any) => i),
      catchError(e => this.error(e))
    );
  }

  deleteItemById(id: any): Observable<Item> {
    // Corrigido: Substitua as aspas simples por backticks (`) para interpolação correta
    return this.http.delete<Item>(`${this.baseUrl}/${id}`).pipe(
      map((i: any) => i),
      catchError(e => this.error(e))
    );
  }

  error(e: any): Observable<any> {
    console.log(e);
    return EMPTY;
  }
}
