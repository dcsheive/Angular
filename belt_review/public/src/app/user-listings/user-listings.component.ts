import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-user-listings',
  templateUrl: './user-listings.component.html',
  styleUrls: ['./user-listings.component.css']
})
export class UserListingsComponent implements OnInit {
  user;
  products;
  constructor(private _us: UserService, private router: Router, private _ls: ListingService) { }

  ngOnInit() {
    this.getId();
  }
  getProducts() {
    this._ls.getAll(data => {
      this.products = data;
    });
  }
  update() {
    this.getProducts();
  }
  getId() {
    this._us.getId( id => {
      if (id && !id['message']) {
        this.user = id;
      } else {
        this.router.navigateByUrl('/');
      }
    });
  }
}
