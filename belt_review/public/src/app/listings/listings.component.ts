import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  user;
  products: any;
  constructor(private _ls: ListingService, private _us: UserService , private router: Router) { }

  ngOnInit() {
    this.getProducts();
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
        this.user = null;
        this.router.navigateByUrl('/');
      }
    });
  }
}
