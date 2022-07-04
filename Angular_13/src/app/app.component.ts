import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "Desenvolvedor Fullstack";

  userData = {
    email: 'l.henrick@live.com',
    role: 'Admin',
  }
  
  title = 'Angular_13';
}
