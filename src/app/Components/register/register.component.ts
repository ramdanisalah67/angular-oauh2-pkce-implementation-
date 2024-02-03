import { Component } from '@angular/core';
import { KeyloakService } from '../../Services/keyloak.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
username="omar"
password="omar"
email="omar@gmail.com"

constructor(private mykeycloackService:KeyloakService){}


async register() {
  try {
    await this.mykeycloackService.registerUser(this.username, this.email, this.password);
    // Registration successful, perform any additional actions (e.g., navigate to another page)
  } catch (error) {
    // Handle registration error (e.g., display error message)
    console.error('Error registering user:', error);
  }
}
}
