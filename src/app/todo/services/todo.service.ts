import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { Todo } from '../model/todo.model';
import { LibTodoService } from './lib-todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements LibTodoService {

  private session: Storage = sessionStorage;
  private todos: Todo[] = [];

  constructor(private readonly router: Router) { }

  getAllTodo(): Observable<Todo[]> {
    return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
      this.todos = JSON.parse(this.session.getItem('todo') || '[]'); // -> Cara ambil
      observer.next(this.todos);
    });
  }

  saveTodo(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      if(todo.id) {
        this.todos = this.todos.map((x) => {
          if (x.id == todo.id) {
            x = todo;
          }
          return x;
        });
      } else {
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
      }
      this.session.setItem('todo', JSON.stringify(this.todos)); // -> Cara nyimpan
      this.router.navigate(['/todo']);
    });
  }

  getOneTodo(id: number): Observable<Todo> {
    return new Observable<Todo>((obs: Observer<Todo>) => {
      obs.next(this.todos.find((x) => x.id == id) as Todo);
    });
  }

  toggleTodo(todo: Todo): Observable<void> {
    return new Observable<void>((obs: Observer<void>) => {
      todo.status = !todo.status;
      this.session.setItem('todo', JSON.stringify(this.todos));
    });
  }

  deleteTodo(todo: Todo): Observable<void> {
    return new Observable<void>((obs: Observer<void>) => {
      const idx = this.todos.indexOf(todo);
      this.todos.splice(idx, 1);
      this.session.setItem('todo', JSON.stringify(this.todos));
    });
  }
}