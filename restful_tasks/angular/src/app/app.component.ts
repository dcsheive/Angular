import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent implements OnInit {
  tasks: any;
  task: any;
  newTask: any;
  newTask2: any;
  editTask: Boolean;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.editTask = false;
    this.getTasksFromService();
    this.newTask = { title: '', description: ''};
    this.newTask2 = { title: '', description: '', completed: ''};
  }
  getTasksFromService() {
    const observable = this._httpService.getTasks();
    observable.subscribe(data => {
      this.tasks = data;
    });
  }
  getTask(id) {
    const observable = this._httpService.getTask(id);
    observable.subscribe(data => {
      this.task = data;
    });
  }
  onSubmit() {
    this._httpService.addTask(this.newTask).subscribe(data => {
      this.task = data;
    });
    this.newTask = { title: '', description: ''};
    this.getTasksFromService();
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
  }
}
