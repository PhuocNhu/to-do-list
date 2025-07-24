import { Component } from '@angular/core';
import { ToDoService } from '../../services/to-do-service';
import { CommonModule } from '@angular/common';
import { ToDoModel } from '../../models/to-do-model';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-to-do-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.scss'
})
export class ToDoList{
  inputAddTodo: string = '';
  inputEditTodo: string = '';
  constructor(public todoService: ToDoService, private toastrService: ToastrService){}
  onEdit(tittle: string){
    this.inputEditTodo = tittle;
  }
  onSubmitEdit(id: number){
    this.todoService.editTodo(id, this.inputEditTodo);
    this.toastrService.success(`Edited successfully`);
  }
  onDelete(item: ToDoModel){
    this.todoService.deleteTodo(item);
    this.toastrService.error(`Deleted successfully`);
  }
  onSubmitAdd(){
    if(this.inputAddTodo !== ''){
      this.todoService.addTodo(this.inputAddTodo);
      this.inputAddTodo = '';
      this.toastrService.success(`Added successfully`);
    }
    else  this.toastrService.error(`Nothing to add`);
  }
}
