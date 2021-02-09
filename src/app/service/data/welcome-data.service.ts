import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorld() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  executeHelloWorldWithParam(name) {
    // let basicAuth = this.createBasicAuthHttpHeader()
    // let headers = new HttpHeaders({
    //   Authorization: basicAuth
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`,
    //{headers}
    );
  }

  /* createBasicAuthHttpHeader() {
    let username = 'user'
    let password = 'password'
    let basicAuthHeaderString = 'Basic '+window.btoa(username+':'+password)
    return basicAuthHeaderString
  } */
}
