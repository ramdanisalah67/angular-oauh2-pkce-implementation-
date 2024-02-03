import { MyMessageSecure } from './Models/my-message-secure';
import { Component, OnInit } from '@angular/core';
import { NullValidationHandler, OAuthEvent, OAuthService } from 'angular-oauth2-oidc';

import { authConfig } from './authConfig';
import { AppService } from './Services/app.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Oauth2_PKCE_FrontEnd';
  myContent: MyMessageSecure = new MyMessageSecure();
  isAuthenticated: boolean = false;
  token:any
  username:any
  time=1
  constructor(private oauthService: OAuthService, private myService: AppService,private router:Router) {
  
  }

  ngOnInit(): void {
    this.Configure();
    this.token=this.oauthService.getAccessToken() 
    const userClaims : any= this.oauthService.getIdentityClaims() 
    this.username=userClaims.preferred_username ? userClaims.preferred_username : ""
    console.log(userClaims)
  }

  private Configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      // Check if user is logged in after loading discovery document
      if (this.oauthService.hasValidAccessToken()) {
       if(this.time==1) {this.ngOnInit(); this.time++}
      } else {
        console.log('User is not logged in.');
      }
    }); 
   }

  login() {
    this.oauthService.initCodeFlow();
  }

  logout() {
    this.oauthService.logOut();
  }


}
