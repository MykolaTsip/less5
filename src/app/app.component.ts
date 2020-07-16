import { Component } from '@angular/core';
import {UserService} from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  id = 0;

constructor(private userService: UserService) {
}

  getUserById(): void {
    this.userService.getUser(this.id).subscribe(value => console.log(value));
  }
}
