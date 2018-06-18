import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;
  task: any;
  newTask: any;
  newTask2: any;
  editTask: Boolean;
  powers: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.editTask = false;
    this.getTasksFromService();
    this.newTask = { title: '', description: ''};
    this.newTask2 = { title: '', description: '', completed: ''};
    this.powers = ['true', 'false'];
  }
  sendId(eventData) {
    if (eventData[0] === 'edit') {
      this.startEdit(eventData[1]);
    }
    if (eventData[0] === 'delete') {
      this.deleteTask(eventData[1]);
    }
    if (eventData[0] === 'get') {
      this.getTask(eventData[1]);
    }
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
  getTask(id) {
    this._httpService.getTask(id, (data) => {
      this.task = data;
    });
  }
  onSubmit() {
    this._httpService.addTask(this.newTask).subscribe(data => {
      this.task = data;
    });
    this.newTask = { title: '', description: ''};
    this.getTasksFromService();
    this.editTask = false;

  }
  startEdit(id) {
    this.getTask(id);
    this.editTask = true;
  }
  updateTask(id) {
    this._httpService.editTask(id, this.newTask2).subscribe(data => {
      this.task = data;
    });
    this.newTask2 = { title: '', description: '', completed: ''};
    this.getTasksFromService();
    this.editTask = false;

  }
  deleteTask(id) {
    const observable = this._httpService.delTask(id);
    observable.subscribe(data => {
      this.task = data;
    });
    this.getTasksFromService();
    this.editTask = false;

  }
}
