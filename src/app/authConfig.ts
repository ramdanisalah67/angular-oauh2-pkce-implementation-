import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/realms/oauth2-demo',
    redirectUri: 'http://localhost:4200',
    clientId: 'Client_pkce',
    scope: 'acr profile email roles web-origins',
    responseType: 'code',
    showDebugInformation: true, 
    strictDiscoveryDocumentValidation: true,

};  