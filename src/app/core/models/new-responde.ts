import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewsResponse } from '../models/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = environment.newsApi.baseUrl;
  private apiKey = environment.newsApi.apiKey;

  constructor(private http: HttpClient) {}

  // 👉 Tu método de obtener titulares
  getTopHeadlines(country: string = 'us'): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      `${this.baseUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`
    );
  }
}
