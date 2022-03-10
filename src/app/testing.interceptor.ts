import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const modified = request.clone({ 
      setHeaders: { "X-Man": "Wolverine" } 
    });
    return next.handle(modified);

    // const httpReq = request.clone({
    //   url: request.url.replace("http://","https://")
    // });
    // return next.handle(httpReq)



    //  const hardcode = '138d128-0671-4121-8084-f6332a992a40';
    //  const requesth = request.clone({
    //    setHeaders: {
    //      Authorization: `Bearer ${hardcode}`
    //    }
    //  });
     
    // return next.handle(requesth);
    
  }
}
