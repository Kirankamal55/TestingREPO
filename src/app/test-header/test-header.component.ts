import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test-header',
  templateUrl: './test-header.component.html',
  styleUrl: './test-header.component.css'
})
export class TestHeaderComponent {

  constructor(private router: Router) {

  }

  abc(){
    this.router.navigate(['/home'])
  }

  xyz(){
    alert()
    this.router.navigate(['/signup'])
  }

}
