import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage {
  errorMsg= false;

  constructor(private router: Router) { }

  createUser() {
    // Perform user creation logic here
    const fullName = (document.getElementsByName('fullName')[0] as HTMLInputElement).value;
    const email = (document.getElementsByName('email')[0] as HTMLInputElement).value;
    const password = (document.getElementsByName('password')[0] as HTMLInputElement).value;

    

   if(fullName && email && password  ){
     this.router.navigate(['/userdashboard']);
   }else{
    this.errorMsg = true
   }
   
  }

  goToLoginPage() {
    // Redirect to the login page
    this.router.navigate(['auth/login-page']);
  }
}