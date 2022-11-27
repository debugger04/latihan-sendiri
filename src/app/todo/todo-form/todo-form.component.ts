import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Todo, TodoFormField } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    namaKegiatan: new FormControl(''),
    status: new FormControl(false)
  });

  constructor(private readonly todoService: TodoService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (param) => {
        const { id } = param;
        this.todoService.getOneTodo(id).subscribe({
          next: (todo) => {
            this.setFormValue(todo);
          }
        });
      }
    });
  }

  saveTodo(): void {
    this.todoService.saveTodo(this.todoForm.value).subscribe();
    this.todoForm.reset();
  }

  setFormValue(todo: Todo): void {
    this.todoForm.controls[TodoFormField.ID]?.setValue(todo.id);
    this.todoForm.controls[TodoFormField.NAMA]?.setValue(todo.namaKegiatan);
    this.todoForm.controls[TodoFormField.STATUS]?.setValue(todo.status);
  }

}
