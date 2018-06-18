import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() item;
  @Output() taskEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  triggerEvent(data) {
    this.taskEmitter.emit(data);
  }

}
