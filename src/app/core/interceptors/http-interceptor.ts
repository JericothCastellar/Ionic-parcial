import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cloned = req;

    if (req.url.includes('newsapi.org')) {
      cloned = req.clone({
        setHeaders: {
          'X-Api-Key': environment.newsApi.apiKey
        }
      });
    }

    return next.handle(cloned);
  }
}