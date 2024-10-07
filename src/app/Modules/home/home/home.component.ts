import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  showAlert():void {
    console.info("console Home page");
    alert("alert home page");
  }
}
