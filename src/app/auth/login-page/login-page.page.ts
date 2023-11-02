import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage {
  errorMsg: boolean =false;

  constructor(private router: Router) { }

  loginUser() {
    // Perform login validation here
    const emailOrPhone = (document.getElementsByName('emailOrPhone')[0] as HTMLInputElement).value;
    const password = (document.getElementsByName('password')[0] as HTMLInputElement).value;

    // Check if emailOrPhone and password are not empty
    if (emailOrPhone && password) {
      this.router.navigate(['/userdashboard']);
    } else {
      this.errorMsg = true
    }
  }

  navigateToCreateUser() {
    // Redirect to the create user page
    this.router.navigate(['auth/create-user']);
  }
}
