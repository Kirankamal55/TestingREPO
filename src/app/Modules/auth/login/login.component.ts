import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { AuthServiceService } from '../../../core/services/auth-service.service';
import { TrimPipe } from '../../../core/pipes/trim.pipe'; 
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userData:any;
  emailText: string = '';
  ngOnInit() {
   // const storedData = localStorage.getItem('users');
    // To retrieve the data later, use:
  /*  const retrievedData = localStorage.getItem('users');
    if (retrievedData) {
      const parsedData = JSON.parse(retrievedData);
      console.log(parsedData); // { username: "user123", token: "abc123xyz" }
    } */
  }
  constructor(private trimpipe:TrimPipe,private localStorageService:LocalStorageService, private router:Router) {
   /* if (typeof localStorage !== 'undefined') {
      const storedData = localStorage.getItem('users');
      this.storedSignupData = storedData ? JSON.parse(storedData):null;
    } */

}
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  }) 

onLogin() {
  const userData = this.localStorageService.getItem('users');
  //console.log(this.loginForm);
  //console.log("showing stored userdata "+this.localStorageService.getItem('users'));
  
  if (this.loginForm && userData) {
    //console.log("have form data and userdata");
    const loginData = this.loginForm.value;
    if ( loginData.email === userData[0].email && loginData.password === userData[0].password) {
        this.router.navigate(['/home']);
      } else {
        console.log('Invalid email or password');
      }
  } else {
      console.log("No data inside");
  }

}
 get trimmedInput(): string {
  return this.trimpipe.transform(this.emailText);
}

}
