import { MyRequest } from './../../Models/my-request';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/Services/app.service';
import { MyMessageSecure } from 'src/app/Models/my-message-secure';
import { OAuthEvent, OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{

  myContent:MyMessageSecure=new MyMessageSecure()
  request:MyRequest=new MyRequest()
  constructor(private httpClient: HttpClient,
    private myService: AppService,
    private oauthService: OAuthService)
    {
      
    }


  ngOnInit(): void {
  
   /*  this.myService.getMessageRessource().subscribe(data=>{this.myContent=data;console.log(data)})
      this.myService.getMessageRessource2().subscribe(data=>{this.myContent=data;console.log(data)})
    this.myService.getMessageRessource3().subscribe(data=>{this.myContent=data;console.log(data)})
    this.myService.getMessageRessource4().subscribe(data=>{this.myContent=data;console.log(data)})
      */
   }


   sendTokenRequest() {

  }
  
}
