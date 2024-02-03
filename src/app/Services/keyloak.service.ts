import { Injectable } from '@angular/core';
import KeycloakAdminClient from 'keycloak-admin';
import { ConnectionConfig } from 'keycloak-admin/lib/client';

@Injectable({
  providedIn: 'root'
})
export class KeyloakService {

  private keycloakAdminClient: KeycloakAdminClient;

  constructor() {
    this.keycloakAdminClient = new KeycloakAdminClient();
    // Initialize the admin client with appropriate config
    const config: ConnectionConfig = {
      baseUrl: 'http://localhost:8180',
      realmName: 'oauth2-demo',
      // Since clientId is not a property of ConnectionConfig, you should remove it
    };
    this.keycloakAdminClient.setConfig(config);
  }

 public async registerUser(username: string, email: string, password: string) {
    try {
      // Authenticate the admin client
      await this.keycloakAdminClient.auth({
        username: 'salah',
        password: 'salah',
        grantType: 'password',
        clientId: 'Client_pkce',
      });

      // Create new user
      const newUser = await this.keycloakAdminClient.users.create({
        username: username,
        email: email,
        enabled: true, // Optionally, set other user properties
      });

      return newUser;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }
}
