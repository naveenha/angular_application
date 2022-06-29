import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WelcomeDataService } from '../service/data/welcome-data.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''
  welcomeMessageFromSB: string
  errorMessageFromSB: string

  constructor(private route: ActivatedRoute, private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessage() {
    // console.log(this.welcomeService.executeHelloWorld())
    this.welcomeService.executeHelloWorld().subscribe(response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error))
    // console.log('last line')
  }

  getWelcomeMessageWithParam() {
    this.welcomeService.executeHelloWorldWithParam(this.name).subscribe(response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error))
    // console.log('last line')
  }

  handleSuccessResponse(response) {
    this.welcomeMessageFromSB = response.message
  }

  handleErrorResponse(error) {
    this.errorMessageFromSB = error.error.message

  }

}
