import { Injectable } from '@angular/core';
import { ToDoModel } from '../models/to-do-model';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  fav = [];
  todoList: ToDoModel[] = [
    {
      id: 1,
      title: 'Subscribe to codelogic',
    },
    {
      id: 2,
      title: 'Welcome to code logic',
    },
    {
      id: 3,
      title: 'Create Angular app',
    }
  ];

  constructor() { }

  deleteTodo(item: ToDoModel) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
  }

  editTodo(id: number, title: string) {
    let index = this.todoList.findIndex(todoModel => todoModel.id = id);
    this.todoList[index].title = title;
  }

  addTodo(title: string) {
    let id = this.todoList.length + 2;

    const item: ToDoModel = {
      id: id,
      title: title
    }
    this.todoList.unshift(item);
  }
}
