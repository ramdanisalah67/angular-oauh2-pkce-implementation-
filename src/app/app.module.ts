import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OAuthModule} from "angular-oauth2-oidc";
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CustomLoginComponent } from './Components/custom-login/custom-login.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { RegisterComponent } from './Components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CustomLoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8080/api'],
        sendAccessToken: true
      }
    }),
    MatButtonModule,

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
