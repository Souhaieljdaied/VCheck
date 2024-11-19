import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  mat = true;

  check(variable: String): void {
    if (variable == 'mat') {
      this.mat = true;
    } else {
      this.mat = false;
    }
  }
  
}
