import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  welcome_note = false;

  constructor(){
    this.welcome_note = true;
  }

  show(){
    this.welcome_note = false;
  }

}
