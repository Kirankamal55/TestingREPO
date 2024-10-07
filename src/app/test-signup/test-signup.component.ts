import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-signup',
  templateUrl: './test-signup.component.html',
  styleUrl: './test-signup.component.css'
})
export class TestSignupComponent {

  constructor(private router: Router) {

  }

  abc(){
    this.router.navigate(['/home'])
  }

  xyz(){
    this.router.navigate(['/signup'])
  }

}
