import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgControl,NgForm, Validators, FormControl} from '@angular/forms';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { json } from 'stream/consumers';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {
  //SignUpForm: FormGroup; 
  signupForm: any = [];
  retrievedData: any;
  userData: any;
  emailVal:any;
  // Declare signupForm

  constructor(private localStorageService:LocalStorageService, private router:Router) {} 
  ngOnInit() {
   //  this.localStorageService.clear();
    // console.log(this.localStorageService.getItem('users'));
    this.signupForm = new FormGroup({
      first_name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  
  onInputChange(event:Event): void {
    //console.log('Manually triggered input change: ', this.signupForm.get('name').value);
    const input = event.target as HTMLInputElement;
    let value = input.value;
    if (!value.trim().length) {
        value = value.replace(/\s+/g, '');
    }

    // Update the value of the input control
//    this.signupForm.get(type).setValue(value.trim(), { emitEvent: false });
  }

  onSubmitSignUp() {
     if (this.signupForm.valid) {
         const users = this.localStorageService.getItem('users') || [];
          users.push(this.signupForm.value);  
          this.localStorageService.setItem('users', users);
          const loginValue = {
            email: this.signupForm.value.email,
            password: this.signupForm.value.password
          };
          localStorage.setItem('loginData', JSON.stringify(loginValue));
          this.router.navigate(['/home']);
      } else {
        console.log("not valid");
      }
    }
}
