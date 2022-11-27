import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  // Disini properties
  private _todos: Todo[] = [];

  get todos(){
    return this._todos;
  }

  set todos(tada: Todo[]){
    this._todos = tada;
  }

  constructor(private readonly todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void{
    this.todoService.getAllTodo().subscribe({
      next: (todos) => {
        this._todos = todos;
      }
    })
  }

  onDeleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe();
  }

  onToggleTodo(todo: Todo): void {
    this.todoService.toggleTodo(todo).subscribe();
  }

}
