import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage {
  errorMsg: boolean = false;
  showPassword: any;
  errortext: any;
  isLoading: any;

  constructor(private router: Router, private location : Location) {}

  back(){
    this.location.back()
  }

  loginUser() {
    const emailOrPhone = (document.getElementsByName('emailOrPhone')[0] as HTMLInputElement).value;
    const password = (document.getElementsByName('password')[0] as HTMLInputElement).value;

    if (emailOrPhone && password) {
      this.router.navigate(['/userdashboard']);
    } else {
      this.errorMsg = true;
    }
  }

  navigateToCreateUser() {
   
    this.router.navigate(['auth/create-user']);
  }

 
}
