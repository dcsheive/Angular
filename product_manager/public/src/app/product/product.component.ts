import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() item;
  @Output() taskEmitter = new EventEmitter();
  constructor(private _httpService: ProductService) { }

  ngOnInit() {
  }
  deleteProduct(id) {
    this._httpService.delProduct(id).subscribe(data => {});
    this.triggerEvent();
  }
  triggerEvent() {
    this.taskEmitter.emit();
  }
}
