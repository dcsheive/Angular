import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ListingService } from './listing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _us: UserService, private router: Router, private _ls: ListingService) {}
  logout() {
    this._us.logout(data => {
      this.router.navigateByUrl('/');
    });
  }
}
