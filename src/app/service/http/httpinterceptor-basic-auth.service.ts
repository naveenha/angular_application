import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HTTPInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuth: BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user'
    // let password = 'password'
    // let basicAuth = 'Basic ' + window.btoa(username+':'+password)
    let basicAuthHeaderToken = this.basicAuth.getAuthenticatedToken();
    let username = this.basicAuth.getAuthenticatedUser();
    if(basicAuthHeaderToken && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderToken
        }
      })
    }
    return next.handle(request)
  }
}
