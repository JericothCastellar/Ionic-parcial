import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = environment.newsApi.baseUrl;
  private apiKey = environment.newsApi.apiKey;

  constructor(private http: HttpClient) {}


  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines?country=us&apiKey=${this.apiKey}`);
  }

//buscar artículos
  getEverything(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/everything?q=${query}&apiKey=${this.apiKey}`);
  }
}
