import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username= 'user'
  username= ''
  password= ''
  invalidLogin= false
  errorMessage= 'Invalid Credentials'

  constructor(private router: Router, private hcas: HardcodedAuthenticationService,
    private basicAuth: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.hcas.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin= false
    } else {
      this.invalidLogin= true
    }
  }

  handleBasicAuthLogin() {
    this.basicAuth.executeAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin= false
      }, error => {
        this.invalidLogin= true
    })
  }

  handleJWTAuthLogin() {
    this.basicAuth.executeJWTAuthenticationService(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin= false
      }, error => {
        this.invalidLogin= true
    })
  }

}
